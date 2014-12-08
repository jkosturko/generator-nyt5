var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\.spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    baseUrl: '/base/',
    paths: {
        'jquery/nyt': 'vendor/nytimes/foundation/js/src/lib/jquery/2.1.1',
        'jquery/2.1': 'vendor/nytimes/foundation/js/src/lib/jquery/2.1.1',
        'jquery/2.0': 'vendor/nytimes/foundation/js/src/lib/jquery/2.0.3',
        'jquery/1.11': 'vendor/nytimes/foundation/js/src/lib/jquery/1.11.0',
        'jquery/1.10': 'vendor/nytimes/foundation/js/src/lib/jquery/1.10.2',
        'jquery/1.9': 'vendor/nytimes/foundation/js/src/lib/jquery/1.9.1',
        'underscore/nyt': 'vendor/nytimes/foundation/js/src/lib/underscore/1.6.0',
        'underscore/1.6': 'vendor/nytimes/foundation/js/src/lib/underscore/1.6.0',
        'underscore/1.5': 'vendor/nytimes/foundation/js/src/lib/underscore/1.5.2',
        'underscore/1.4': 'vendor/nytimes/foundation/js/src/lib/underscore/1.4.4',
        'backbone/nyt': 'vendor/nytimes/foundation/js/src/lib/backbone/1.1.2',
        'hammer/nyt': 'vendor/nytimes/foundation/js/src/lib/hammer/1.0.6',
        'd3/3': 'vendor/nytimes/foundation/js/src/lib/d3/3.4.11',
        'topojson/1': 'vendor/nytimes/foundation/js/src/lib/topojson/1.6.15',
        'queue/1': 'vendor/nytimes/foundation/js/src/lib/queue/1.0.7',
        'foundation': 'vendor/nytimes/foundation/js/src',
        'shared/account/templates': 'vendor/nytimes/shared/Account/js/tests/template-mock',
        'shared/ad/templates': 'vendor/nytimes/shared/Ad/js/tests/template-mock',
        'shared/audio/templates': 'vendor/nytimes/shared/Audio/js/tests/template-mock',
        'shared/community/templates': 'vendor/nytimes/shared/Community/js/tests/template-mock',
        'shared/data/templates': 'vendor/nytimes/shared/Data/js/tests/template-mock',
        'shared/fontsizer/templates': 'vendor/nytimes/shared/FontSizer/js/tests/template-mock',
        'shared/following/templates': 'vendor/nytimes/shared/Following/js/tests/template-mock',
        'shared/interactive/templates': 'vendor/nytimes/shared/Interactive/js/tests/template-mock',
        'shared/masthead/templates': 'vendor/nytimes/shared/Masthead/js/tests/template-mock',
        'shared/mediaviewer/templates': 'vendor/nytimes/shared/MediaViewer/js/tests/template-mock',
        'shared/messaging/templates': 'vendor/nytimes/shared/Messaging/js/tests/template-mock',
        'shared/modal/templates': 'vendor/nytimes/shared/Modal/js/tests/template-mock',
        'shared/navigation/templates': 'vendor/nytimes/shared/Navigation/js/tests/template-mock',
        'shared/nextin/templates': 'vendor/nytimes/shared/NextIn/js/tests/template-mock',
        'shared/page/templates': 'vendor/nytimes/shared/Page/js/tests/template-mock',
        'shared/recommendations/templates': 'vendor/nytimes/shared/Recommendations/js/tests/template-mock',
        'shared/ribbon/templates': 'vendor/nytimes/shared/Ribbon/js/tests/template-mock',
        'shared/searchform/templates': 'vendor/nytimes/shared/SearchForm/js/tests/template-mock',
        'shared/sharetools/templates': 'vendor/nytimes/shared/ShareTools/js/tests/template-mock',
        'shared/slideshow/templates': 'vendor/nytimes/shared/Slideshow/js/tests/template-mock',
        'shared/tabs/templates': 'vendor/nytimes/shared/Tabs/js/tests/template-mock',
        'shared/timeswire/templates': 'vendor/nytimes/shared/TimesWire/js/tests/template-mock',
        'shared/upshot/templates': 'vendor/nytimes/shared/Upshot/js/tests/template-mock',
        'shared/video/templates': 'vendor/nytimes/shared/Video/js/tests/template-mock',
        'shared/whatsnext/templates': 'vendor/nytimes/shared/WhatsNext/js/tests/template-mock',
        'shared/account': 'vendor/nytimes/shared/Account/js/src',
        'shared/ad': 'vendor/nytimes/shared/Ad/js/src',
        'shared/audio': 'vendor/nytimes/shared/Audio/js/src',
        'shared/community': 'vendor/nytimes/shared/Community/js/src',
        'shared/data': 'vendor/nytimes/shared/Data/js/src',
        'shared/fontsizer': 'vendor/nytimes/shared/FontSizer/js/src',
        'shared/following': 'vendor/nytimes/shared/Following/js/src',
        'shared/interactive': 'vendor/nytimes/shared/Interactive/js/src',
        'shared/masthead': 'vendor/nytimes/shared/Masthead/js/src',
        'shared/mediaviewer': 'vendor/nytimes/shared/MediaViewer/js/src',
        'shared/messaging': 'vendor/nytimes/shared/Messaging/js/src',
        'shared/modal': 'vendor/nytimes/shared/Modal/js/src',
        'shared/navigation': 'vendor/nytimes/shared/Navigation/js/src',
        'shared/nextin': 'vendor/nytimes/shared/NextIn/js/src',
        'shared/page': 'vendor/nytimes/shared/Page/js/src',
        'shared/recommendations': 'vendor/nytimes/shared/Recommendations/js/src',
        'shared/ribbon': 'vendor/nytimes/shared/Ribbon/js/src',
        'shared/searchform': 'vendor/nytimes/shared/SearchForm/js/src',
        'shared/sharetools': 'vendor/nytimes/shared/ShareTools/js/src',
        'shared/slideshow': 'vendor/nytimes/shared/Slideshow/js/src',
        'shared/tabs': 'vendor/nytimes/shared/Tabs/js/src',
        'shared/timeswire': 'vendor/nytimes/shared/TimesWire/js/src',
        'shared/upshot': 'vendor/nytimes/shared/Upshot/js/src',
        'shared/video': 'vendor/nytimes/shared/Video/js/src',
        'shared/whatsnext': 'vendor/nytimes/shared/WhatsNext/js/src',
        '<%= _.slugify(nytApp) %>/templates': 'js/tests/template-mock',
        '<%= _.slugify(nytApp) %>': 'js/src'
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
