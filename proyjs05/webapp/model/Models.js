sap.ui.define([
     "sap/ui/model/json/JSONModel"
    ]
    ,function(JSONModel){
        "use strict";
        return {
            createPersona:function(){
                var oData = {
                    persona:{
                        name:"Persona01"
                    }
                };
                return new JSONModel(oData);
            }
        }        
    });
