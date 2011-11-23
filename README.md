# Redzone User Interface

This contains the stylesheets and images for Redzone so that UI elements can be easily shared between RMM apps.

## Requirements

Requires Rails 3.1, as this only works with the asset pipeline.

## Installation

Add the gem to your Gemfile:

    gem 'redzone_ui', :git => 'git@github.com:rmm/redzone-ui.git'

Then import the desired stylesheets to your CSS manifest:

    /*
    *= require redzone/ui
    *= require_self
    */

A print stylesheet is also available at **redzone/print**.

Currently, you'll have to copy an existing application.html.haml layout, but eventually I'd like to create a generator for it, or modify it to be more generic.

## TODO

* As I said above, the layout needs to be added to this gem somehow.
* Remove app-specific CSS from here. Only reusable stuff should be packaged in the gem.
