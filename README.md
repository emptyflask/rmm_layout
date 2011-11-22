# Redzone User Interface

This contains the stylesheets and images for Redzone so that UI elements can be easily shared between RMM apps.

## Requirements

Requires Rails 3.1, as this only works with the asset pipeline.

## Installation

Add the gem to your Gemfile:

    gem 'redzone_ui', :git => 'http://github.com/rmm/redzone-ui.git'

Then import the desired stylesheets to your CSS manifest:

    /*
    * This is a manifest file that'll automatically include all the stylesheets available in this directory
    * and any sub-directories. You're free to add application-wide styles to this file and they'll appear at
    * the top of the compiled file, but it's generally better to create a new file per style scope.
    *= require redzone_ui
    *= require_self
    *= require_tree . 
    */

Currently, you'll have to copy an existing application.html.haml layout, but eventually I'd like to create a generator for it, or modify it to be more generic.

## TODO

* As I said above, the layout needs to be added to this gem somehow.
* Remove app-specific CSS from here. Only reusable stuff should be packaged in the gem.
* Rename?
