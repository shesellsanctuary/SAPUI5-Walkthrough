module.exports = function (grunt) {
	grunt.registerTask('serveProxy', [
		'less',
		'configureRewriteRules:dev',
		'setupProxies:sapProxy',
		'connect:dev',
        'watch'
	]);
}; 