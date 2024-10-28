sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.HelloPanel", {
      onPress: function () {
        var oBundle = this.getView().getModel("flti18n").getResourceBundle();
        var sPersonalInfo = this.getView().getModel().getProperty("/personInfo/name");
        var msg = oBundle.getText("hiMsg", [sPersonalInfo]);
        MessageToast.show(msg);
      },
      openDialog: function () {
        if (!this.oDialog) {
          this.oDialog = this.loadFragment({ name: "sap.ui5.walkthrough.view.HelloDialog" });
        }
        this.oDialog.then(function (oDlog) {
          oDlog.open();
        });
      },
      onCloseDialog: function () {
        this.byId("hiDialog").close();
      },
    });
  }
);
