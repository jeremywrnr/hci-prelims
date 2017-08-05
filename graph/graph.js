// example: https://bl.ocks.org/mbostock/6123708

document.addEventListener('DOMContentLoaded',
                          setupGraph,
                          false);

function setupGraph() {
  console.log('loaded')
  var selected = []
  var margin = {top: -5, right: -5, bottom: -5, left: -5},
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var zoom = d3.zoom()
      .scaleExtent([1, 15])
      .on("zoom", zoomed);

  var svg = d3.select(".page-content").insert("svg", ":first-child")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
      .call(zoom);

  var rect = svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all");

  var color = d3.scaleOrdinal(d3.schemeCategory20);
  var container = svg.append("g");
  var simulation = d3.forceSimulation()

  container.append("g")
      .attr("class", "x axis")
    .selectAll("line")
      .data(d3.range(0, width, 10))
    .enter().append("line")
      .attr("x1", function(d) { return d; })
      .attr("y1", 0)
      .attr("x2", function(d) { return d; })
      .attr("y2", height);

  container.append("g")
      .attr("class", "y axis")
    .selectAll("line")
      .data(d3.range(0, height, 10))
    .enter().append("line")
      .attr("x1", 0)
      .attr("y1", function(d) { return d; })
      .attr("x2", width)
      .attr("y2", function(d) { return d; });

  d3.json("./data.json", function(error, graph) {
    if (error) throw error;

    var container = svg.append("g")

    var link = container.append("g")
        .attr("class", "links")
        .selectAll("line")
      .data(graph.links)
        .enter()
        .append("line")

    var node = container.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
      .enter().append("circle")
        .attr("r", 10)
        .attr("fill", function(d) { return color(d.group); })
        .call(d3.drag().on("drag", dragged));
    node.enter("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.title; });

    function mouseClick(node) {
      selected[1] = selected[0];
      selected[0] = node;

      d3.selectAll("circle").style("fill", function(d) {
        var s1 = null;
        var s0 = selected[0].id;
        if (selected[1]) {
          s1 = selected[1].id;
        }
        if (d.id == s0 || d.id == s1) {
          return "red";
        }
        return color(d.group);
      });

      if (selected[0]) {
        document.getElementById("paper_title_a").innerHTML = selected[0].title;
      }
      if (selected[1]) {
        document.getElementById("paper_title_b").innerHTML = selected[1].title;
      }

      // update the ideas list
      var ideasstring = "<ul>";
      for (var i=0; i < graph.links.length; i++) {
          var l = graph.links[i];

          if (selected[0] == selected[1]) {
            if (l.source === selected[0] || l.target === selected[0]) {
              ideasstring += "<li>" + l.idea + "</li>"
            }
          } else {
            if (l.source === selected[0] && l.target === selected[1] ||
                l.source === selected[1] && l.target === selected[0]) {
                ideasstring += "<li>" + l.idea + "</li>"
            }
          }
      }
      ideasstring += "</ul>"
      document.getElementById("ideas_list").innerHTML = ideasstring;
    }

    // color node on hover
    function mouseOver(node) {
      d3.select(this).style("fill", "red");
    }

    // uncolor node unless it has been selected
    function mouseOut(node) {
      d3.select(this).style("fill", "blue");
      if (node != selected[0] && node != selected[1]) {
        d3.select(this).style("fill", function(d) {
          return color(d.group);
        });
      }
    }

    node.on("click", mouseClick)
        .on("mouseover", mouseOver)
        .on("mouseout", mouseOut);

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .center([250, 250])
        .links(graph.links)

    function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("cx", function(d) { return Math.max(0, Math.min(width, d.x)); })
          .attr("cy", function(d) { return Math.max(0, Math.min(height, d.y)); });
    }
  });

  function zoomed() {
    container.attr("transform", d3.event.transform);
  }

  function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    d3.select(this).classed("dragging", true);
  }

  function dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  function dragended(d) {
    d3.select(this).classed("dragging", false);
  }
}
