module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        
        //Plugins
        plugins: [
            'karma-coverage',
			'karma-junit-reporter',
			'karma-openui5',
			'karma-phantomjs-launcher-nonet',
			'karma-qunit'
		],
        
        // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        browserNoActivityTimeout: 20000,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['openui5', 'qunit'],

        // list of files / patterns to load in the browser
        files: [
            {
                pattern: 'bower_components/**/*',
                included: false,
                served: true,
                watched: false,
                nocache: false
            },{
                pattern: 'webapp/test/integration/AllJourneys.js',
                included: true,
                served: true,
                watched: false,
                nocache: false
            },{
                pattern: 'webapp/test/unit/allTests.js',
                included: true,
                served: true,
                watched: false,
                nocache: false
            },{
                pattern: 'webapp/**/*',
                included: false,
                served: true,
                watched: false,
                nocache: false
            }
        ],
        
        //Proxies
        proxies: {
            '/resources/sap/m/': '/base/bower_components/openui5-sap.m/resources/sap/m/',
            '/resources/': '/base/bower_components/openui5-sap.ui.core/resources/'
        },
        
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        phantomjsLauncher: {
            // configure PhantomJS executable for each platform 
            cmd: {
                linux: 'target/phantomjs-maven-plugin/phantomjs-2.1.1-linux-x86_64/bin/phantomjs',
                darwin: 'target/phantomjs/darwin/phantomjs',
                win32: 'target/phantomjs-maven-plugin/phantomjs-2.1.1-windows/bin/phantomjs.exe'
            },
            exitOnResourceError: false
        },

        openui5: {
            path: 'bower_components/openui5-sap.ui.core/resources/sap-ui-core.js'
        },

        // How the client should execute the test, like run in an iframe, capture the console and so on.
        client: {
            openui5: {
                //https://openui5.hana.ondemand.com/#docs/guide/91f2d03b6f4d1014b6dd926db0e91070.html
                config: {
                    theme: 'sap_belize',
                    libs: 'sap.m',
                    compatVersion: 'edge',
                    frameOptions: 'deny',
                    animation: 'false',
                    resourceroots: {
                        'sap.m': '/base/bower_components/openui5-sap.m/resources/sap/m/',
						'sap.ui': '/base/bower_components/openui5-sap.ui.core/resources/sap/ui/',
                        'com.sap.CloudSCAME.SAPUI5-walkthrough': '/base/webapp/'
                    },
                    themeroots: {
						'sap_belize': '/base/bower_components/openui5-themelib_sap_belize/resources/'
					}
                }
            }
        },
        
        reporters: ['progress', 'junit', 'coverage'],
        
        junitReporter: {
			outputDir: 'target/junit',
			outputFile: 'TEST-com.sap.ui5.selenium.qunit.QUnitTest.xml',
			suite: 'openui5',
			useBrowserName: false
		},

		preprocessors: {
			'webapp/**/*.js': 'coverage'
		},

		coverageReporter: {
			type: 'cobertura',
			dir: 'target/karma-coverage',
            subdir: 'report',
            file: 'cobertura.xml'
		},
        
        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};