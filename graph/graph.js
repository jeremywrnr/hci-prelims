// https://bl.ocks.org/puzzler10/4438752bb93f45dc5ad5214efaa12e4a

document.addEventListener('DOMContentLoaded', setupGraph, false);

function setupGraph() {
  console.log('loaded');
  d3.json('./data.json', drawGraph);
}

function drawGraph(error, graph) {
  var parent = document.getElementById('container'),
    width = parent.clientWidth,
    height = parent.clientHeight;
  var svg = d3
    .select(parent)
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  console.log(width, height);
  var radius = 10;

  //set up the simulation and add forces
  var simulation = d3.forceSimulation().nodes(graph.nodes);
  var link_force = d3.forceLink(graph.links).id(d => d.id);
  var charge_force = d3.forceManyBody().strength(-100);
  var center_force = d3.forceCenter(width / 2, height / 2);
  simulation
    .force('charge_force', charge_force)
    .force('center_force', center_force)
    .force('links', link_force);
  simulation.on('tick', tickActions);

  //add encompassing group for the zoom
  var g = svg.append('g').attr('class', 'everything');

  //draw lines for the links
  var link = g
    .append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(graph.links)
    .enter()
    .append('line')
    .on('mouseover', handleMouseOverLink);

  // circles for nodes
  var node = g
    .append('g')
    .attr('class', 'nodes')
    .selectAll('circle')
    .data(graph.nodes)
    .enter()
    .append('circle')
    .attr('r', radius)
    .on('mouseover', handleMouseOverNode);

  //add drag capabilities
  var drag_handler = d3
    .drag()
    .on('start', drag_start)
    .on('drag', drag_drag)
    .on('end', drag_end);
  drag_handler(node);

  //add zoom capabilities
  var zoomer = d3
    .zoom()
    .scaleExtent([1 / 5, 5])
    .on('zoom', zooming);
  zoomer(svg);

  /** Functions **/

  function drag_start(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function drag_drag(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function drag_end(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  function zooming() {
    g.attr('transform', d3.event.transform);
  }

  function tickActions() {
    node.attr('cx', d => d.x).attr('cy', d => d.y);
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
  }

  function idToEl(id) {
    return document.getElementById(id);
  }

  function renderNode(n) {
    return `<b>${n.title}</b> <br/><i>${n.year} - ${n.author}</i> `;
  }

  function handleMouseOverNode(d) {
    console.log(d);
    idToEl('p1').innerHTML = renderNode(d);
    idToEl('p2').innerHTML = '';
    idToEl('notes').innerHTML = '';
  }

  function handleMouseOverLink(d) {
    idToEl('p1').innerHTML = renderNode(d.source);
    idToEl('p2').innerHTML = renderNode(d.target);
    idToEl('notes').innerHTML = d.idea;
  }
}
