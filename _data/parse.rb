require "yaml"
require "pp"

data = YAML.load(File.read("./papers.yaml"))

PP.pp data
