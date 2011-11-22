# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rmm_layout/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rmm_layout"
  s.version     = RmmLayout::VERSION
  s.authors     = ["Jon Roberts"]
  s.email       = ["jon@emptyflask.net"]
  s.homepage    = "http://github.com/rmm"
  s.summary     = "RMM application layout gem"
  s.description = "Contains all RMM standard layouts, stylesheets, etc"

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.require_path = 'lib'

  s.add_dependency "rails", "~> 3.1.1"
end
