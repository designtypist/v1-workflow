// Add Live Reload
/* 
	npm install --global gulp-cli
	npm install --save-dev gulp
	Install gulp modules: gulp-concat,gulp-uglify,gulp-minify-css, gulp-imagemin,gulp-sass,gulp-connect
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS  = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');

// npm install gulp-connect
var connect = require('gulp-connect');

gulp.task('js', function() {
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('dist/css'));
});

//add in later to fix imports

//gulp.task('styles', function () {
  //gulp.src('_components/sass/**/*.scss')
    /*.pipe(compass({
      config_file: 'config.rb',
      css: 'app/css',
      sass: '_components/sass'
    }))
    .on('error', errorLog)
    .pipe(gulp.dest('app/css'))
    .pipe(livereload());
});
*/
gulp.task('sass', function() {
	gulp.src('src/scss/*.scss')
		.pipe(sass({ includePaths : ['_/base/*.scss'] }).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('images', function() {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function() {
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'))
});

gulp.task('copyFonts', function() {
	gulp.src('src/fonts/*')
	.pipe(gulp.dest('dist/fonts'))
	// add reload at the end of our tasks
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/*.html', ['copy'])
	gulp.watch('src/scss/*.scss', ['sass'])
	gulp.watch('src/js/*.js', ['js']);
});

// start live-reload server
gulp.task('connect', function() {
	connect.server({
		port: 8000,
		root: 'dist/',
		livereload: true
	});
});

// Create a run function that does our processing
gulp.task('run', [ 'js', 'css', 'sass','images', 'copy' ]);

gulp.task('default', [ 'run', 'watch', 'connect']);
gulp.task('live', [ 'sass', 'watch', 'connect']);