# Phone Catalog Tutorial (Yeoman-ized)

## Overview

I needed a familiar context for showing off some [Yeoman][yeoman] stuff in AngularJS projects. The *excellent* tutorial application [PhoneCat][phonecat] from the [AngularJS][angular-js] site serves this need nicely!

This repo is simply a *yeoman-ized* inetpretation of phonecat I'm using for demo's.

## Get Going!
Clone the repo:
```
git clone https://github.com/eckdanny/angular-phonecat-yeoman.git demo && cd demo
```
Install NPM and Bower dependencies:
```
npm install && bower install
```
Install selenium standalone server:
```
node_modules/protractor/bin/install_selenium_standalone
```
and start it up:
```
./selenium/start
```
Start Karma:
```
karma start
```
and the dev server:
```
grunt server
```

### What's Different?

I tried deviate as little as possible from [phonecat][phonecat]. The tools and libraries are more contemporary, but the application and test code is the same in spirit.

Perhaps the most significant difference, is that there ***is no tutorial!*** The git-tag-based walkthrough in phonecat *(which is really cool)* is not replicated here at all.

#### Yeoman 
- kindof the main point...

#### Protractor
- No more **ngScenario**
- Uses [Protractor][protractor] for running e2e tests

#### Updated Libs
- Updated Angular version to [1.2rc][1.2rc]
- Updated to [Bootstrap][bootstrap] CSS to version 3

## Development with Yeoman

*I'm just cherry-picking topics I'm interested in presenting. For more information on Yeoman, a great place to start it the [website][yeoman].* 

### Running the app during development

Yeoman has an integrated dev server that runs on node. Invoke with

```
grunt server
```

and navigate your browser to `http://localhost:9000` to see the app running in your browser (if it doesn't open for you automatically.) The server is hooked up with live-reload, so as you save changes in your dev files you should see your changes update in the browser.

### A word on Maintainability...

A small step to improve readability/understandability involves devs following uniform style and convention. Thankfully, theres tools that come with Yeoman to help out.

#### Style
[EditorConfig][editor-config] is a tool that *"helps developers define and maintain consistent coding styles."* Grab the plugin for your IDE of choice and install it. The configuration file for this project lives in `.editorconfig`.

#### Linting

[JSHint][js-hint] is *"a tool that helps to detect errors and potential problems in your JavaScript code."* The configuration settings live in  `.jshintrc`.

### Unit Testing

The two ways about it *I* feel are most useful...

#### Continuously (watches files and executes on save)

Receive feedback everytime a watched file modified. Essential for TDD.

```
karma start
```

#### On-Demand

This is should be part of Continuous-Integration. Using Grunt, run all the subtasks registered to the 'test' task (including `karma run`):

```
grunt test
```

### E2E Testing

This is a bit different from the phonecat demo. E2E tests are run using [Protractor][protractor] "an end to end test framework for Angular applications built on top of WebDriverJS", instead of the Angular Scenario Runner. 

After the Selenium server is started, run the E2E tests with Protractor:

```
node_modules/.bin/protractor protractor.conf.js
```

### Contact

I don't really plan on maintaining this repo. (Its mostly an example for demo's, rememeber?) However if there is an interest, I'll happily accept PRs!

  [angular-js]: [http://angularjs.org/]
  [phonecat]: https://github.com/angular/angular-phonecat
  [yeoman]: http://yeoman.io/
  [angular-generator]: https://github.com/yeoman/generator-angular
  [protractor]: https://github.com/angular/protractor
  [1.2rc]: https://github.com/angular/angular.js/tree/v1.2.0-rc.2
  [bootstrap]: http://getbootstrap.com/
  [editor-config]: http://editorconfig.org/
  [js-hint]: http://www.jshint.com/
