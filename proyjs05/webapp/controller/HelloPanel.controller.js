sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
    ]
    ,function(Controller,MessageToast){
        "use strict";
        return Controller.extend("proyjs05.Controller.HelloPanel",{
            onInit:function(){

            },

            onHola:function(){
                MessageToast.show("Hola EV desde controller MessageToast");
            }
        });        
    });
