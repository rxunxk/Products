sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    'use strict'

    return UIComponent.extend("com.raunak.products.Controller", {
        metadata: {
            interface: "sap.ui.core.UIAsyncContentCreation",
            rootView: {
                viewName: "com.raunak.products.view.App",
                type: "XML",
                id: "app"
            }
        }
    })
})