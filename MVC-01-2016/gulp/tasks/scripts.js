import gulp from 'gulp';
import path from 'path';
import concat from 'gulp-concat';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import header from 'gulp-header';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import util from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

import options from '../options';
import config from '../config';
import notifyError from '../utils/error-notifier';

let startTime, uglifyOptions = {};
let pkg = require('../../package.json');
let banner = ['/* A K F N - <%= pkg.description %> - <%= pkg.year %> */\n console.log("A K F N - <%= pkg.year %>");\n',''].join('\n');

gulp.task('scripts', () => {
	gulp.start('scripts:custom');
	gulp.start('scripts:libs');
});

gulp.task('scripts:custom', () =>{
    if(options.debug){
        gulp.start('scripts:watchify');
    }else{
        gulp.start('scripts:browserify');
    }
});

gulp.task('scripts:browserify', () => {
    const bundler = browserify({
        entries : config.src.custom
    }).transform(babelify, { 'presets': ['es2015'] })

    bundle(bundler);
});

gulp.task('scripts:watchify', () => {
    const bundler = watchify(browserify({
        entries : config.src.custom,
        debug: true,
        cache: {}, 
        packageCache: {}, 
        fullPaths: true
    })).transform(babelify, { 'presets': ['es2015'] })

    bundle(bundler);

    bundler.on('update', () => {
        util.log(util.colors.yellow('Bundle has changed.'));

        util.log('Running', '\'' + util.colors.cyan('bundling') + '\'...')
        bundle(bundler);
    });
});

gulp.task('scripts:libs', () =>{
	return gulp.src(config.src.vendors)
    	.pipe(concat('vendors.js'))
    	.pipe(gulp.dest(config.dist.pathVendors));
});

const bundle = (bundler, filename) => {
    startTime = process.hrtime();

    if(options.production) {
        uglifyOptions = {
            compress : {
                drop_console : true
            },
            screwIE8: true,
            preserveComments : false
        }
    }else {
        uglifyOptions = {
            compress : {
                drop_console : false
            },
            screwIE8: true,
            preserveComments : true
        }
    }

    return bundler.bundle()
        .on('error', notifyError)
        .on('end', () => {
            util.log('Finished', '\'' + util.colors.cyan('bundling') + '\'', 'after', util.colors.magenta(prettyHrtime(process.hrtime(startTime))));
        })
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(options.debug ? sourcemaps.init({ loadMaps: true }) : util.noop())
        .pipe(uglify(uglifyOptions))
        .pipe(options.production ? header(banner, { pkg : pkg }) : util.noop())
        .pipe(options.debug ? sourcemaps.write() : util.noop())
        .pipe(gulp.dest(config.dist.pathScripts))
};