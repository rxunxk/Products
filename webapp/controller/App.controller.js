sap.ui.define(
  ["sap/ui/core/mvc/Controller",
    "sap/m/StandardListItem"
  ],
  function (Controller, StandardListItem) {
    "use strict";

    return Controller.extend("com.raunak.products.controller.App", {

      onPressCreateNewProduct: function (oEvent) {
        const sProductName = this.getView().byId("idProductName").getValue();

        this.getView().byId("idProductList").addItem(new StandardListItem({
          title: sProductName,
        }))

      },

      onPressDelete: function (oEvent) {
        const oItem = oEvent.getParameter("listItem");

        this.getView().byId("idProductList").removeItem(oItem);
      }

    });
  },
);
