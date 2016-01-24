const src = './src';
const app = './public';

const config = {
	browserSupport : ['ios > 7'],
	src : {
		path 	: src,
		scripts : src + '/js/app.js',
		custom 	: src + '/js/custom/Main.js',
		vendors : src + '/js/libs/*.js',
		styles 	: src + '/scss/application.scss',
		index 	: src + '/index.html'
	},
	watch : {
		styles 	: src + '/scss/**/*.scss',
		scripts : {
			all: src + '/js/**/*.js',
			libs : src + '/js/libs/*.js',
			custom : src + '/js/custom/**/*.js'
		}
	},
	dist : {
		filename 	: 'build',
		pathStyles 	: app + '/css',
		pathScripts : app + '/js',
		pathVendors : app + '/js',
		path 		: app + '/',
		publicPath 	: app
	}
};

export default config;