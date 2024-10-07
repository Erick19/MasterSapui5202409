sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel"
    ]
    ,function(Controller,MessageToast,JSONModel){
        "use strict";
        return Controller.extend("proyjs05.Controller.App",{
            onInit:function(){
                var oData = {
                    persona:{
                        name:"Persona01"
                    }
                }
                var oModel = new JSONModel(oData);
               
                this.getView().setModel(oModel);
            },

            onHola:function(){
                MessageToast.show("Hola EV desde controller MessageToast");
            }
        });        
    });
