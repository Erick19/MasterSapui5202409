sap.ui.define([
    "sap/ui/core/UIComponent",
     "proyjs05/model/Models",
     "sap/ui/model/resource/ResourceModel"
    ]
    ,function(UIComponent,Models,ResourceModel){        

        return UIComponent.extend("proyjs05.Component",{
            metadata:{
                manifest:"json"
                /*
                "rootView":{
                    "viewName"  :"proyjs05.view.App",
                    "type"      :"XML",
                    "async"     : true,
                    "id"        :"app"
                }
                */
            },
    
            init:function(){
                //Llamamos al init Padre
                UIComponent.prototype.init.apply(this,arguments);

                //Esto da acceso al Modelo 
                //this.getView().setModel(Models.createPersona());                
                this.setModel(Models.createPersona());                

                // Esto estable modelo de textos
                var i18nModel = new ResourceModel({ bundleName : "proyjs05.i18n.i18n"});
                //this.getView().setModel(i18nModel,"mo_i18n");
                this.setModel(i18nModel,"mo_i18n");

            }
        });        
    });

