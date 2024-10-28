QUnit.config.autoStart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";
  sap.ui.require(["sap/ui5/walkthrough/test/unit/model/formatter"], function () {
    QUnit.start();
    debugger;
  });
});
