sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/sap/CloudSCAME/SAPUI5-walkthrough/model/utils",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, utils, MessageToast, JSONModel, ResourceModel) {
  "use strict"; // it helps to prevent common JavaScript pitfalls and it’s therefore a good practice
  return Controller.extend("com.sap.CloudSCAME.SAPUI5-walkthrough.controller.App",  {
    onInit: function () {
      this.getView().addStyleClass(utils.getContentDensityClass());
    },
    onShowHello: function () {
       // read msg from i18n model
       var oBundle = this.getView().getModel("i18n").getResourceBundle();
       var sRecipient = this.getView().getModel().getProperty("/recipient/name");
       var sMsg = oBundle.getText("helloMsg", [sRecipient]);
       // show message
       MessageToast.show(sMsg);
    }

  });
});
