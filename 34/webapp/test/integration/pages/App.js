sap.ui.define(["sap/ui/test/Opa5", "sap/ui/test/actions/Press"], function (Opa5, Press) {
  "use strict";

  var sViewName = "sap.ui5.walkthrough.view.HelloPanel";

  Opa5.createPageObjects({
    onTheAppPage: {
      actions: {
        iPressTheSayHelloWithDialogButton: function () {
          return this.waitFor({
            id: "a",
            viewName: sViewName,
            actions: new Press(),
            errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view",
          });
        },
      },

      assertions: {
        iShouldSeeTheHelloDialog: function () {
          return this.waitFor({
            controlType: "sap.m.Dialog",
            success: function () {
              Opa5.assert.ok(true, "The dialog is open");
            },
            errorMessage: "Did not find the dialog control",
          });
        },
      },
    },
  });
});
