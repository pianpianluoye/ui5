sap.ui.define(["sap/ui/core/util/MockServer"], function (MockServer) {
  "use strict";

  return {
    onInit: function () {
      var oMockServer = new MockServer({
        rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/",
      });

      MockServer.config({
        autoRespond: true,
        autoRespondAfter: 100,
      });

      var sPath = sap.ui.require.toUrl("sap/ui5/walkthrough/localService");
      oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

      oMockServer.start();
    },
  };
});
