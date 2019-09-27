var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
	pages:["src/*.html"]
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts','src/demo.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}
// gulp.task('connect', function () {
//      connect.server({
//          livereload: true
//      });
//  });
gulp.task("default", gulp.series(["copy-html"], bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);



// gulp.task("copy-html",function(){
// 	return gulp.src(paths.pages).pipe(gulp.dest("dist"));
// });

// gulp.task("default",gulp.series(["copy-html"],function(){
// 	return browserify({
// 		basedir:'.',
// 		debug:true,
// 		entries: ['src/main.ts'],
// 		cache:{},
// 		packageCache:{}
// 	}).plugin(tsify).bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'));
// }));


// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

// gulp.task("default",function(){
// 	return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
// })