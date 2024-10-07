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

                //Esto da acceso al Modelo 
                this.getView().setModel(Models.createPersona());                

                // Esto estable modelo de textos
                var i18nModel = new ResourceModel({ bundleName: "proyjs05.i18n.i18n"});
                this.getView().setModel(i18nModel,"mo_i18n");
            },

            onHola:function(){
                MessageToast.show("Hola EV desde controller MessageToast");
            }
        });        
    });
