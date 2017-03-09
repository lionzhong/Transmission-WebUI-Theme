/**
 * Created by Vincent on 2017/2/17.
 */
require.config({
    baseUrl: "./javascript/",
    paths: {
        "jquery": "../javascript/lib/jquery/jquery.min",
        "jquery-migrate":"../javascript/lib/jquery/jquery-migrate.min",
        "jquery-ui":"../javascript/lib/jquery/jquery-ui.min",
        "jquery-ui-contextmenu":"../javascript/lib/jquery/jquery.ui-contextmenu.min",
        "jquery-transmenu":"../javascript/lib/jquery/jquery.transmenu.min",
        "json2":"../javascript/lib/json2.min"
    },
    shim: {
        "jquery":{
            deps: ["json2"]
        },
        "jquery-ui":{
            deps: ["jquery","json2"]
        },
        "jquery-migrate":{
            deps: ["jquery"]
        },
        "jquery-transmenu":{
            deps: ["jquery-ui"]
        },
        "jquery-ui-contextmenu":{
            deps: ["jquery-ui"]
        },
        "json2":"jquery/json2.min"
    }
});
define(["jquery","jquery-migrate","jquery-ui","jquery-ui-contextmenu","jquery-ui-contextmenu","jquery-transmenu"], function($) {
    $.getScript("./javascript/all.js");
});