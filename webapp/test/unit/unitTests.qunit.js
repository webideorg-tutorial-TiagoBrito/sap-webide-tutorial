/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/tutorial/CICD_GITHandsOn/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});