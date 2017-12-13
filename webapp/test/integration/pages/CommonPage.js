sap.ui.define("com.sap.CloudSCAME.SAPUI5-walkthrough.test.integration.pages.CommonPage", [
  'sap/ui/test/Opa5'
],function (Opa5) {
  "use strict";

  Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						success: function (aButtons) {
							aButtons[0].$().trigger("tap");
						},
						errorMessage: "Did not find the helloDialogButton button on the app page"
					});
				}
			},
			assertions: {
				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
  
  function getFrameUrl(sHash, sUrlParameters) {
    var sUrl = jQuery.sap.getResourcePath("com/sap/CloudSCAME/SAPUI5-walkthrough/test", "/mockServer.html");

    if (sUrlParameters) {
      sUrlParameters = "?" + sUrlParameters;
      sUrl = sUrl + sUrlParameters;
    }

    if (sHash) {
      sUrl = sUrl + "#" + sHash;
    }
        
    return sUrl;
  }

  return Opa5.extend("com.sap.CloudSCAME.SAPUI5-walkthrough.test.integration.pages.CommonPage", {

    constructor: function (oConfig) {
      Opa5.apply(this, arguments);

      this._oConfig = oConfig;
    },

    iStartMyApp: function (oOptions) {
      var sUrlParameters;
      oOptions = oOptions || { delay: 0 };

      sUrlParameters = "serverDelay=" + oOptions.delay;

      this.iStartMyAppInAFrame(getFrameUrl(oOptions.hash, sUrlParameters));
    },

    iLookAtTheScreen: function () {
      return this;
    }
  });
});
