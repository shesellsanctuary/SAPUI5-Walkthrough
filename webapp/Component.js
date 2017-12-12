sap.ui.define([
  'sap/ui/core/UIComponent',
  'com/sap/CloudSCAME/SAPUI5-walkthrough/model/models',
  "sap/ui/model/json/JSONModel",
], function(UIComponent, models, JSONModel) {
  'use strict';
  return UIComponent.extend('com.sap.CloudSCAME.SAPUI5-walkthrough.Component', {
    metadata: {
      manifest: 'json'
    },
    /**
    * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
    * @public
    * @override
    */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);
      // set data model
       var oData = {
          recipient : {
             name : "World"
          }
       };
       var oModel = new JSONModel(oData);
       this.setModel(oModel);

      //Initialize the router
      this.getRouter().initialize();

      // Set the device model
      this.setModel(models.getDeviceModel(), "Device");
    }
  });
});
