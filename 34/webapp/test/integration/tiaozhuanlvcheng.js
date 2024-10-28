/*global QUnit, opaTest*/

sap.ui.define(
  ["sap/ui5/walkthrough/localService/mockserver", "sap/ui/test/opaQunit", "./pages/App"],
  function (mockserver) {
    "use strict";

    QUnit.module("Tiao Zhuan");

    opaTest("Should open the Hello dialog", function (Given, When, Then) {
      mockserver.onInit();

      Given.iStartMyUIComponent({
        componentConfig: {
          name: "sap.ui5.walkthrough",
          async: true,
        },
      });

      //Actions
      When.onTheAppPage.iPressTheSayHelloWithDialogButton();

      // Assertions
      Then.onTheAppPage.iShouldSeeTheHelloDialog();

      // Cleanup
      Then.iTeardownMyApp();
    });
  }
);
