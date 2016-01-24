import gulp from 'gulp';
import sass from 'gulp-sass';
import util from 'gulp-util';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minifyCss from 'gulp-minify-css';
import mqpacker from 'css-mqpacker';
import rename from 'gulp-rename';
//import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';

import notifyError from '../utils/error-notifier';
import options from '../options';
import config from '../config';

gulp.task('sass', () => {
	gulp.src(config.src.styles)
		//.pipe(options.debug ? sourcemaps.init() : util.noop())
		.pipe(sass())
		.on('error', notifyError)
		.pipe(options.production ? minifyCss() : util.noop())
		.pipe(postcss([
      		autoprefixer({ browsers: config.browserSupport }),
      		mqpacker
    	]))
		//.pipe(options.debug ? sourcemaps.write() : util.noop())
		.pipe(rename(config.dist.filename + '.css'))
		.pipe(gulp.dest(config.dist.pathStyles))
		.pipe(options.debug ? livereload() : util.noop());
});