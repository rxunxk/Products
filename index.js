sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    'use strict'

    XMLView.create({
        viewName: "com.raunak.products.view.App"
    }).then(oView => {
        oView.placeAt('content')
    })
})