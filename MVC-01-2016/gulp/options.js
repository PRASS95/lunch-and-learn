import minimist from 'minimist';
import defaults from 'defaults';

let options = minimist(process.argv.slice(2));

options = defaults(options, {
	debug: true,
	watch: true,
	minify: false,
	env: 'development'
});

if (options.production) {
	options.debug = false;
	options.minify = true;
	options.env = 'production';
}

export default options;