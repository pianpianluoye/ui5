sap.ui.define(
  ["sap/ui/core/Control", "sap/m/RatingIndicator", "sap/m/Label", "sap/m/Button"],
  function (Control, RatingIndicator, Label, Button) {
    "use strict";
    return Control.extend("sap.ui5.walkthrough.control.ProductRating", {
      metadata: {
        properties: {
          rating: { type: "int", defaultValue: 0 },
        },
        aggregations: {
          _ratingIndicator: {
            type: "sap.m.RatingIndicator",
            multiple: false,
            visibility: "hidden",
          },
          _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
          _button: { type: "sap.m.Button", multiple: false, visibility: "hidden" },
        },
        events: {
          ratingChanged: {
            parameters: {
              rating: { type: "int" },
            },
          },
        },
      },
      init: function () {
        this.setAggregation(
          "_ratingIndicator",
          new RatingIndicator({
            value: this.getRating(),
            iconSize: "2rem",
            visualMode: "Half",
            maxValue: 5,
            liveChange: this._onRate.bind(this),
          })
        );
        this.setAggregation(
          "_label",
          new Label({
            text: "{flti18n>ratingLabel}",
          }).addStyleClass("sapUiSmallMargin")
        );
        this.setAggregation(
          "_button",
          new Button({
            text: "{flti18n>ratingSubmit}",
            press: this._onSubmit.bind(this),
            // press: [this._onSubmit, this],
          }).addStyleClass("sapUiTinyMarginTopBottom")
        );
      },
      _onRate: function (oEvent) {
        var oResourceBundle = this.getModel("flti18n").getResourceBundle();
        var ratingValue = oEvent.getParameter("value");
        this.setProperty("rating", ratingValue);

        this.getAggregation("_label").setText(
          oResourceBundle.getText("ratingLabelIndicator", [
            ratingValue,
            oEvent.getSource().getMaxValue(),
          ])
        );
        this.getAggregation("_label").setDesign("Bold");
      },
      _onSubmit: function () {
        var oResourceBundle = this.getModel("flti18n").getResourceBundle();
        this.getAggregation("_ratingIndicator").setEnabled(false);
        this.getAggregation("_label").setText(oResourceBundle.getText("ratingLabelFinal"));
        this.getAggregation("_button").setEnabled(false);
        // 上面定义的events中的事件
        this.fireEvent("ratingChanged", {
          rating: this.getRating(),
        });
      },
      renderer: function (oRm, oControl) {
        oRm.openStart("div", oControl);
        oRm.class("myAppDemoWTProductRating");
        oRm.openEnd();
        oRm.renderControl(oControl.getAggregation("_ratingIndicator"));
        oRm.renderControl(oControl.getAggregation("_label"));
        oRm.renderControl(oControl.getAggregation("_button"));
        oRm.close("div");
      },
    });
  }
);
