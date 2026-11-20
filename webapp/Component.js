sap.ui.define([
    "sap/ui/core/UIComponent",
], function (UIComponent) {
    'use strict'

    return UIComponent.extend("com.raunak.products.Controller", {
        metadata: {
            interface: "sap.ui.core.UIAsyncContentCreation",
            manifest: "json"
        },

        init: function (){
            UIComponent.prototype.init.apply(this, arguments);
        }
    })
})