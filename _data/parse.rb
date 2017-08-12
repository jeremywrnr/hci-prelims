require "JSON"
require "yaml"
require "pp"

data = YAML.load(File.read("./papers.yaml"))

# TODO - some merging based on features to generate all the other lists of
# papers, or otherwise see if they can just be made from jekyll sorting

# you could edit the data here to assign ids to each paper which could then be
# used in the paper graph that sarah made.
#JSON.parse(data.to_s)

# print it out
puts JSON.pretty_generate(JSON.parse(data.to_json.to_s))
