sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Formatter, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("sap.ui5.walkthrough.controller.FapiaoList", {
      formatter: Formatter,
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onSearch: function (oEvent) {
        var aFilters = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilters.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
        }
        var oList = this.byId("fltfapiaoList");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilters);
      },
      onSelectFapiao: function (oEvent) {
        var oRoute = this.getOwnerComponent().getRouter();
        var oItem = oEvent.getSource();
        var fapiaoLuJing1 = window.encodeURIComponent(
          oItem.getBindingContext("fapiao").getPath().substr(1)
        );
        oRoute.navTo("MingxiName", {
          fapiaoLuJing: fapiaoLuJing1,
        });
      },
    });
  }
);
