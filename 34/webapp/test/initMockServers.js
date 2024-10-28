sap.ui.define(["../localService/mockserver"], function (mockserver) {
  "use strict";

  mockserver.onInit();
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
