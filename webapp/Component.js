sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, ResourceModel) {
    'use strict'

    return UIComponent.extend("com.raunak.products.Controller", {
        metadata: {
            interface: "sap.ui.core.UIAsyncContentCreation",
            rootView: {
                viewName: "com.raunak.products.view.App",
                type: "XML",
                id: "app"
            }
        },

        init: function (){
            UIComponent.prototype.init.apply(this, arguments);

            const i18nModel = new ResourceModel({
                bundleName: "com.raunak.products.i18n.i18n"
            });

            this.setModel(i18nModel, "i18n");
        }
    })
})