sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/sap/CloudSCAME/SAPUI5-walkthrough/model/utils"
], function (Controller, utils) {
  "use strict";
  return Controller.extend("com.sap.CloudSCAME.SAPUI5-walkthrough.controller.App", {
    onInit: function () {
      this.getView().addStyleClass(utils.getContentDensityClass());
    }
  });
});