sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "proyjs05/model/Models"
    ]
    ,function(Controller,MessageToast,Models){
        "use strict";
        return Controller.extend("proyjs05.Controller.App",{
            onInit:function(){
                this.getView().setModel(Models.createPersona());                
            },

            onHola:function(){
                MessageToast.show("Hola EV desde controller MessageToast");
            }
        });        
    });
