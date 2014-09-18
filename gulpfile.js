var gulp = require('gulp');

// Node Packages
var browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	concat = require('gulp-concat');

var paths = {
	scripts: 'js/**/*',
	styles: 'css/**/*'
};

// Build scripts
gulp.task('scripts', function () {
	return gulp.src(paths.scripts).pipe(browserify()).pipe(uglify()).pipe(gulp.dest('build/js'));
});

gulp.task('styles', function () {
	return gulp.src(paths.styles).pipe(concat('styles.css')).pipe(less()).pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['scripts', 'styles']);
	gulp.watch(paths.styles, ['scripts', 'styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);