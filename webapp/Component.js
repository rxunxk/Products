sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/raunak/products/model/models"
], function (UIComponent, models) {
    'use strict'

    return UIComponent.extend("com.raunak.products.Controller", {
        metadata: {
            interface: "sap.ui.core.UIAsyncContentCreation",
            manifest: "json"
        },

        init: function (){
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createNewInputModel(), "input");
        }
    })
})