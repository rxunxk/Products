sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"
], function (JSONModel, BindingMode) {
    'use strict'

    return {
        createNewInputModel() {
            return new JSONModel({
                Name: "",
                Category: "",
                Price: "",
                ReleaseDate: null,
                DiscontinuedDate: null
            }).setDefaultBindingMode(BindingMode.TwoWay)
        }
    }
})