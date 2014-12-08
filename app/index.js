'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the first-rate' + chalk.red('Nyt5') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'nytApp',
      message: 'What is the App Name?',
      defaut: 'app-shell'
    }];


    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      this.nytApp = props.nytApp;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
        this.mkdir('conf/http');
        this.mkdir('http/tests/behat/bootstrap');
        this.mkdir('http/tests/behat/build');
        this.mkdir('http/tests/behat/sbx/features');
        this.mkdir('http/tests/behat/dev/features');
        this.mkdir('http/tests/behat/stg/features');
        this.mkdir('http/tests/behat/prd/features');
        this.mkdir('js/tests/specs');
        this.mkdir('js/tests/functional');
        this.mkdir('js/src');
        this.mkdir('php/tests');
        this.mkdir('php/src');
        this.mkdir('scss');

        this.template('_build.json', 'build.json'),
        this.template('_composer.json', 'composer.json'),
        this.template('_package.json', 'package.json'),
        this.template('_sonar.php.properties', 'sonar.php.properties'),
        this.template('_sonar.js.properties', 'sonar.js.properties'),
        this.template('_karma-config.js', 'karma-config.js'),
        this.template('_test-main.js', 'js/tests/test-main.js'),
        this.template('_template-mock.js', 'js/tests/template-mock.js'),
        this.template('_intern-config.js', 'js/tests/intern-config.js'),
        this.template('_sample.spec.js', 'js/tests/specs/sample.spec.js'),
        this.template('_pageLoaded.test.js', 'js/tests/functional/pageLoaded.test.js'),
        this.template('_FeatureContext.php', 'http/tests/behat/bootstrap/FeatureContext.php'),
        this.template('_behat-sbx.yml', 'http/tests/behat/sbx/behat.yml'),
        this.template('_behat-dev.yml', 'http/tests/behat/dev/behat.yml'),
        this.template('_behat-stg.yml', 'http/tests/behat/stg/behat.yml'),
        this.template('_behat-prd.yml', 'http/tests/behat/prd/behat.yml'),
        this.template('_sample.js', 'js/src/sample.js'),
        

        this.template('_README.md', 'README.md'),

      this.fs.copy(
        this.templatePath('_feature-flags.json'),
        this.destinationPath('feature-flags-shell.json')
      );                  
      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.fs.copy(
        this.templatePath('_phpunit.xml'),
        this.destinationPath('phpunit.xml')
      );

    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
