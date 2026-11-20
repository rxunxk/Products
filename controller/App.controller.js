sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.raunak.products.controller.App", {
      onCartButtonPress: (oEvent) => {
        MessageToast.show("Added to Cart!");
      },
    });
  },
);
