require "JSON"
require "yaml"
require "pp"

data = YAML.load(File.read("./papers.yaml"))

# TODO - some merging based on features to generate all the other lists of
# papers, or otherwise see if they can just be made from jekyll sorting

PP.pp data

JSON.load(data)
