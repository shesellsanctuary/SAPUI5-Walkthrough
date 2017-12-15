sap.ui.define([
  'sap/ui/core/UIComponent',
  'com/sap/CloudSCAME/SAPUI5-walkthrough/model/models',
  "sap/ui/model/json/JSONModel",
	"com/sap/CloudSCAME/SAPUI5-walkthrough/controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent, models, JSONModel, HelloDialog, Device) {
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

       // set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

       // set dialog
      this._helloDialog = new HelloDialog(this.getRootControl());
      
      //Initialize the router
      this.getRouter().initialize();

      // Set the device model
      this.setModel(models.getDeviceModel(), "Device");
    },
    
    getContentDensityClass : function() {
      if (!this._sContentDensityClass) {
        if (!sap.ui.Device.support.touch) {
          this._sContentDensityClass = "sapUiSizeCompact";
        } else {
          this._sContentDensityClass = "sapUiSizeCozy";
        }
      }
      return this._sContentDensityClass;
    },

    openHelloDialog : function () {
      this._helloDialog.open();
    }
  });
});
