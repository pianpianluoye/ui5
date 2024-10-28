sap.ui.define([], function () {
  "use strict";
  return {
    statusText: function (status) {
      var resourceBundle = this.getView().getModel("flti18n").getResourceBundle();
      switch (status) {
        case "A":
          return resourceBundle.getText("statusA");
        case "B":
          return resourceBundle.getText("statusB");
        case "C":
          return resourceBundle.getText("statusC");
        default:
          return status;
      }
    },
  };
});
