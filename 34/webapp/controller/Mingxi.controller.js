sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/m/MessageToast"],
  function (Controller, History, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.Mingxi", {
      onInit: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.getRoute("MingxiName").attachPatternMatched(this._onObjectMatched1, this);
      },
      _onObjectMatched1: function (oEvent) {
        var ccc = window.decodeURIComponent(oEvent.getParameter("arguments").fapiaoLuJing);
        this.getView().bindElement({
          path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").fapiaoLuJing),
          model: "fapiao",
        });
      },
      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          // window.history.back();
          window.history.go(-1);
        } else {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("HomeName", {}, true);
        }
      },
      onRatingChanged: function (oEvent) {
        var fValue = oEvent.getParameter("rating");
        var oResourceBundle = this.getView().getModel("flti18n").getResourceBundle();
        MessageToast.show(oResourceBundle.getText("ratingMsg", [fValue]));
      },
    });
  }
);
