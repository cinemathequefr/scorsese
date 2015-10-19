// Installation des plugins: npm install gulp gulp-rename gulp-uglify gulp-concat gulp-minify-css gulp-watch --save-dev
// Pour exécuter : gulp watch

var gulp = require("gulp");
var rename = require("gulp-rename");				// https://github.com/hparra/gulp-rename
var uglify = require("gulp-uglify");				// https://github.com/terinjokes/gulp-uglify
var concat = require("gulp-concat");				// https://github.com/wearefractal/gulp-concat
var minifycss = require("gulp-minify-css");	// https://github.com/jonathanepollack/gulp-minify-css
var watch = require("gulp-watch");				// https://github.com/floatdrop/gulp-watch

gulp.task("watch", function () {
	watch(["src/js/**/*.js", "src/css/**/*.css"], function () {
		gulp.start("build");
	});
});

gulp.task("build", function () {
	gulp.src([
    "src/js/vendor/jquery-2.1.4.min.js",
    "src/js/vendor/lodash.min.js",
    "src/js/vendor/jquery.sticky.js",
    "src/js/vendor/TweenMax.min.js",
    "src/js/vendor/TimelineMax.min.js",
    "src/js/vendor/ScrollMagic.js",
    "src/js/vendor/animation.gsap.min.js",
    "src/js/data.js",
    "src/js/mapview.js",
    "src/js/main.js"
	])
	.pipe(concat("main.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));

	gulp.src([
		"src/css/main.css"
	])
	.pipe(concat("main.css"))
	.pipe(minifycss())
	.pipe(gulp.dest("css"));

});


