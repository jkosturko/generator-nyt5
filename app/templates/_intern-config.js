// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>
define(['intern'], function(intern) {
    'use strict';

    return {

        proxyPort: 7778,

        proxyUrl: 'http://127.0.0.1:7778/',

        capabilities: {
            'selenium-version': '2.44.0',
            'idle-timeout': 30
        },

        environments: [
            {
                browserName: 'firefox',
                firefox_profile: intern.args.firefox_profile,
                version: ['31']
            }
        ],

        maxConcurrency: 3,

        tunnel: 'NullTunnel',

        reporters: [ 'runner' ],

        useLoader: {
            'host-node': 'dojo/dojo',
            'host-browser': 'node_modules/dojo/dojo.js'
        },

        functionalSuites: [
            'js/tests/functional/pageLoaded.test'
        ],

        useSauceConnect: false,

        excludeInstrumentation: /^(?:tests|node_modules)\//,

        testDomain: intern.args.testDomain
    };
});
