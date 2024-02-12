# Lego price alert firefox extension
Browser extension created with __Javascript__\
[Click me to see API documentation](https://documenter.getpostman.com/view/32605188/2sA2r3amLE)

## Table of contents
* [General info](#general-info)
* [Tools & Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Sources](#sources)

## General info
Project was made to track current prices of lego sets\
and provide information about special offers.

## Technologies
Project is created with:
* __Node.js__ version: 20.11.0
* __Javascript__
* __HTML__
* __CSS__

Tools used in project:
* __Visual Studio Code__
* __Postman__

## Setup
Install all modules needed for running node.js server:
```
$ npm install
```

Run server:
```
$ cd ../LEGO-price-alert/nodev1
$ node index.js
```

To install browser extension, run firefox and type ```about:debugging``` in URL bar.\
After that, follow your firefox>temporal extensions>add temporal extension\

Done!

## Features
#### Implemented:
* Show icon in extensions bar
* Search for lego set on the official website
* Add minimalistic user interface
* Create REST API for managing requests
* Create Postman tests for routes
#### To do:
* Connect extension with server
* Provide price from the database
* Recreate user interface to manage new functions

## Status
#### 🟢 Active
Project is in active development

## Sources
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
