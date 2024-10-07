sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "proyjs05/model/Models",
     "sap/ui/model/resource/ResourceModel"
    ]
    ,function(Controller,MessageToast,Models,ResourceModel){
        "use strict";
        return Controller.extend("proyjs05.Controller.App",{
            onInit:function(){

            },

            onHola:function(){
                MessageToast.show("Hola EV desde controller MessageToast");
            }
        });        
    });
