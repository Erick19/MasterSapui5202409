sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    ]
    ,function(XMLView){
        "use strict";
        XMLView.create({
            viewName:"proyjs05.view.App"
        }).then(function(oView){
            oView.placeAt("content");
        }
    )
    });
    