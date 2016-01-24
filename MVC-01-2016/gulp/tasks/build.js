import gulp from 'gulp';
import watch  from 'gulp-watch';
import livereload from 'gulp-livereload';

import options from '../options';
import config from '../config';

gulp.task('build', ['sass','scripts'], () => {
	if (options.watch) {
		livereload.listen();

		//Styles
		watch(config.watch.styles, () =>{
			gulp.start('sass');
		});

		//JavaScript
		// Note : the watch of custom files is handled by watchify in scripts.js
		watch(config.watch.scripts.libs, () => {
			gulp.start('scripts:libs');
		});
	}
});