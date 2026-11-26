sap.ui.define(
  ["sap/ui/core/mvc/Controller",
    "sap/m/ObjectListItem",
    "sap/m/ObjectAttribute",
    "sap/m/ObjectStatus",
    "sap/ui/core/ValueState"
  ],
  function (Controller, ObjectListItem, ObjectAttribute, ObjectStatus, ValueState) {
    "use strict";

    return Controller.extend("com.raunak.products.controller.App", {

      onPressCreateNewProduct: function (oEvent) {
        const sProductName = this.getView().byId("idProductName").getValue();
        const oCategory = this.getView().byId("idCategory").getSelectedItem();
        const sPrice = this.getView().byId("idPrice").getValue();
        const dReleaseDate = this.getView().byId("idReleaseDate").getDateValue();
        const dDiscontinuedDate = this.getView().byId("idDiscontinuedDate").getDateValue();

        this.getView().byId("idProductList").addItem(new ObjectListItem({
          title: sProductName,
          number: sPrice,
          numberUnit: "INR",
          attributes: [
            new ObjectAttribute({
              title: "Category",
              text: oCategory.getText()
            }),
            new ObjectAttribute({
              title: "Release Date",
              text: dReleaseDate
            })
          ],
          firstStatus: new ObjectStatus({
            text: this._getAvailabilityText(dDiscontinuedDate),
            state: this._getAvailabilityState(dDiscontinuedDate)
          })
        }))

      },

      onPressDelete: function (oEvent) {
        const oItem = oEvent.getParameter("listItem");

        this.getView().byId("idProductList").removeItem(oItem);
      },

      _getAvailabilityText: function (dDiscontinuedDate){
        return dDiscontinuedDate > new Date() ? "Available" : "Not Available";
      },

      _getAvailabilityState: function (dDiscontinuedDate){
        return dDiscontinuedDate > new Date() ? ValueState.Success : ValueState.Error
      }

    });
  },
);
