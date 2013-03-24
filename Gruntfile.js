
module.exports = function (grunt) {
	grunt.initConfig({
		lint: {
			all: [
				'plugin/*.js'
			]
		},
		concat: {
			product: {
				src: [
					'imjs.js',
					'plugin/*.js'
				],
				dest: 'imjs.min.js'
			}
		},
		min: {
			product: {
				src: [
					'imjs.min.js'
				],
				dest: 'imjs.min.js'
			}
		}
	});
//	grunt.registerTask('default', ['lint', 'concat', 'min']);
	grunt.registerTask('default', ['concat', 'min']);
};
