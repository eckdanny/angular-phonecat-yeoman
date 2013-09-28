demo-app
========

A tiny angular app for demonstrating development workflow strategies

### Running Unit Tests

#### Continuous Testing

Receive feedback everytime a watched file is saved (great for TDD):

```
karma start
```

#### Single-Run Test

Using Grunt (runs all the subtasks registered to the 'test' task):

```
grunt test
```

### Running e2e Tests

Install selenium standalone server

```
node_modules/protractor/bin/install_selenium_standalone
```

and start the server:

```
./selenium/start
```

then kickoff the protractor tests (in seperate terminal):

```
node_modules/.bin/protractor protractor.conf.js
```

Enjoy!
