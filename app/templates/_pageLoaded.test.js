define([
    'intern',
    'intern!object'
], function (intern, registerSuite) {
    registerSuite({
        name: 'Page Loaded',
        'The page should fully load': function () {
            var self = this;

            this.timeout = 2 * 60 * 1000;  // 2 minutes max timeout
            this.remote.setWindowSize(1440, 850); // Set the window size

            return this.remote
                .get(intern.config.testDomain)
                .findByCssSelector('#page-footer');  // We know the page is loaded when the footer
                                                     // is selectable by the document
        }
    }); 
}); 
