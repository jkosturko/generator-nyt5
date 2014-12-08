module.exports = function(grunt) {

    //loading all tasks from foundation
    grunt.task.loadTasks('./vendor/nytimes/web-products-build-system/grunt-common/tasks/');

    grunt.config.set('requirejs.options.paths', {
        foundation: 'empty:',
        jquery: 'empty:',
        underscore: 'empty:',
        backbone: 'empty:'
    });
};
