sap.ui.define(
  ["sap/ui5/walkthrough/model/formatter", "sap/ui/model/resource/ResourceModel"],
  function (Formatter, ResourceModel) {
    "use strict";
    QUnit.module("QUnit tests for formatter", {
      beforeEach: function () {
        this._oResourceModel = new ResourceModel({
          bundleUrl: sap.ui.require.toUrl("sap/ui5/walkthrough") + "/i18n/i18n.properties",
        });
      },
      afterEach: function () {
        this._oResourceModel.destroy();
      },
    });

    QUnit.test("Should return the translated text", function (assert) {
      var oModel = this.stub();
      oModel.withArgs("flti18n").returns(this._oResourceModel);
      var oViewStub = {
        getModel: oModel,
      };
      var oControllerStub = {
        // getView: this.stub().returns(oViewStub),
        // getView: oModel.returns(oViewStub),
        getView: () => oViewStub,
      };
      var fnIsolatedFormatter = Formatter.statusText.bind(oControllerStub);

      assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");

      assert.strictEqual(
        fnIsolatedFormatter("B"),
        "In Progress",
        "The long text for status B is correct"
      );

      assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");

      assert.strictEqual(
        fnIsolatedFormatter("Foo"),
        "Foo",
        "The long text for status Foo is correct"
      );
    });
  }
);
