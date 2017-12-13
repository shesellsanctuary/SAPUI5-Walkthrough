jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");

sap.ui.require([
  //Load page objects
  "sap/ui/test/Opa5",
  "com/sap/CloudSCAME/SAPUI5-walkthrough/test/integration/pages/CommonPage",
  "com/sap/CloudSCAME/SAPUI5-walkthrough/test/integration/navigationJourney"
], function (Opa5, CommonPage, navigationJourney) {
  "use strict";
  QUnit.config.autostart = false;
  Opa5.extendConfig({
    arrangements: new CommonPage(),
    viewNamespace: "com.sap.CloudSCAME.SAPUI5-walkthrough.view."
  });
    
  sap.ui.require([
    //Load journey objects
  ], function () {
    if (!/PhantomJS/.test(window.navigator.userAgent)) {
      QUnit.start();
    }
  });
});