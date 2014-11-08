'use strict';


requirejs.config({
    paths: {
      jquery: "/components/jquery/dist/jquery.min",
      backbone: "/components/backbone/backbone",
      underscore: "/components/underscore/underscore-min",
      bootstrap: "/components/bootstrap/dist/js/bootstrap.min"
    }
});


require(['jquery','underscore','backbone','bootstrap'], function () {

    var app = {
        initialize: function () {
            // Your code here
        }
    };

    app.initialize();

});
