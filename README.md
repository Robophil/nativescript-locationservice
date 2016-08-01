# README #

Plugin for communicating with Romflex dispatch firebase database

### What is this repository for? ###

* Android service
* 0.0.1
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###
* place this proect in the same directory right as your nativescript, see example below
* eg: sample dir listing=> `nativescript-myproject       nativescript-anotherproject       nativescript-locationservice`


* then run `tns plugin add ../nativescript-locationservice` to install

* add  to your references.d.ts file `/// <reference path="./node_modules/nativescript-locationservice/locationservice.d.ts" /> Needed for autocompletion and compilation.`

### How to use ###
`locationService = require("nativescript-locationservice");`

`locationService.startService("1345-sj4sjhd-343455"); //pass the user UUID to the service`


### have issues ###


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* oghenerobo@gmail.com
* https://github.com/robophil