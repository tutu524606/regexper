var gulp = require("gulp");
var webServer = require("gulp-webserver");

gulp.task("regexper",function(){
	gulp.src("./index.html")
		.pipe(gulp.dest("./app"));
});

gulp.task("webserver",function(){
	gulp.src("./")
		.pipe(webServer({
			port: 8080,
			directoryListing: {
				enabled: true,
				paths: "./"
			},
			livereload: true
		}));
});

gulp.task("watch",function(){
	gulp.watch("./index.html",["regexper"]);
});

gulp.task("default",["watch","webserver"]);