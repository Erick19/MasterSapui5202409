sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     //"proyjs05/model/Models",
     //"sap/ui/model/resource/ResourceModel",
     "sap/ui/core/Fragment"
    ]
    ,function(Controller,MessageToast,Fragment){
        "use strict";
        return Controller.extend("proyjs05.Controller.App",{
            onInit:function(){

            },

            onHola:function(){
                MessageToast.show("Hola EV desde controller MessageToast");
            },
            onHelloDialog: function(){
                const oView = this.getView();

                if(!this.byId("Id_Dialog")){
                    Fragment.load({
                        id:   oView.getId(),
                        name: "proyjs05.view.HelloDialog"
                    }).then(function(oDialog){
                        oView.addDependent();
                        oDialog.open();
                    });
                }else{
                    this.byId("Id_Dialog").open();
                }
            }
        });        
    });
