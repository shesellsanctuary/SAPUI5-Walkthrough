sap.ui.require([
  //Load page objects
  "sap/ui/test/Opa5",
  "com/sap/CloudSCAME/SAPUI5-walkthrough/test/integration/pages/CommonPage",
  "sap/ui/qunit/qunit-css",
  "sap/ui/thirdparty/qunit",
  "sap/ui/qunit/qunit-junit"
], function (Opa5, CommonPage) {
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