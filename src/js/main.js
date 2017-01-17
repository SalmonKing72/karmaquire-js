//todo move into separate config file
require.config({
    paths: {
        jquery: 'jquery-2.1.1.min',
        text: '../bower_components/text/text',
        templates: '../templates',
        hbs: '../bower_components/require-handlebars-plugin/hbs'
    }
});

require(['app'], function (app) {
    app.init();
});