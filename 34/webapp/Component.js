sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device",
  ],
  function (UIComponent, JSONModel, ResourceModel, Device) {
    "use strict";
    return UIComponent.extend("sap.ui5.walkthrough", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        metadata: "json",
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        var oData = {
          personInfo: {
            name: "John Doe",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui5.walkthrough.i18n.i18n",
        });
        this.setModel(i18nModel, "flti18n");

        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");

        this.getRouter().initialize();
      },
    });
  }
);
