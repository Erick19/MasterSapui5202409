sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ]
    ,function(Controller){
        "use strict";
        return Controller.extend("proyjs05.Controller.App",{
            onHola:function(){
                alert("Hola EV desde controller");
            }
        });        
    });
