module.exports = function(config) {
    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'OS X 10.9',
            version: '35'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            version: '30'
        },
        sl_ios_safari: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.9',
            version: '7.1'
        },
        sl_ie_9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '9'
        },
        sl_ie_10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '10'
        },
        sl_ie_11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '11'
        }
    };

    config.set({
        basePath: '',
        frameworks: ['requirejs', 'mocha', 'chai', 'chai-sinon'],
        files: [
            {pattern: 'vendor/nytimes/foundation/js/src/lib/abtest-config.js'},
            {pattern: 'vendor/nytimes/foundation/js/src/lib/abtest-engine.js'},
            {pattern: 'vendor/nytimes/foundation/js/src/lib/magnum.js'},
            {pattern: 'vendor/nytimes/foundation/js/src/lib/modernizr.js'},
            {pattern: 'vendor/nytimes/foundation/js/src/**/*.js', included: false},
            {pattern: 'vendor/nytimes/shared/!(node_modules)/js/src/**/*.js', included: false},
            {pattern: 'vendor/nytimes/shared/!(node_modules)/js/tests/template-mock.js', included: false},
            {pattern: 'js/src/*.js', included: false},
            {pattern: 'js/src/**/*.js', included: false},
            {pattern: 'js/src/**/**/*.js', included: false},
            {pattern: 'js/tests/specs/**/*.js', included: false},
            {pattern: 'js/tests/template-mock.js', included: false},
            'js/tests/test-main.js'
        ],
        exclude: [
            'src/main.js',
            'vendor/nytimes/foundation/js/tests/**/*.js',
            'vendor/nytimes/shared/**/js/tests/specs/**/*.js'
        ],
        reporters: [
            'spec', 'progress', 'coverage', 'saucelabs'
        ],
        preprocessors: {
            'js/src/**/*.js': ['coverage']
        },
        coverageReporter: {
            reporters:[
                {type: 'html', dir:'reports/', subdir:'PhantomJS'},
                {type: 'lcov', dir:'reports/', subdir:'PhantomJS'},
                {type: 'text'}
            ]
        },
        htmlReporter: {
            outputFile: 'test-results.xml'
        },
        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: false,
        sauceLabs: {
            testName: 'NYT5 <%= _.str.capitalize(nytApp) JS Unit Tests',
            username: 'nyt5',
            accessKey: '7bd482f0-8787-4efd-b6e8-d9e89d377110',
            recordScreenshots: false
        },
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        singleRun: true
    });
};
