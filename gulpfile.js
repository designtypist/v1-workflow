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

gulp.task('js', () => {
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

gulp.task('sass', () => {
    //https://stackoverflow.com/questions/26228519/gulp-how-to-create-a-task-that-compiles-multiple-sass-files
	gulp.src('src/scss/home.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});
//.pipe(changed(config.app + 'assets/styles', {extension: '.css'}))

gulp.task('images', () => {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copy', () => {
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'))
	gulp.src('src/fonts/*')
	.pipe(gulp.dest('dist/fonts'))
	// add reload at the end of our tasks
	.pipe(connect.reload());
});

gulp.task('watch', () => {
	livereload.listen();
	gulp.watch('src/*.html', ['copy'])
	gulp.watch('src/scss/**/*.scss', ['sass'])
	gulp.watch('src/js/*.js', ['js']);
});

// start live-reload server
gulp.task('connect', () => {
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