sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
  "use strict";
  new ComponentContainer({
    name: "sap.ui5.walkthrough",
    async: true,
    setttings: {
      id: "walkthrough",
    },
  }).placeAt("content");
});
