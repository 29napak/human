 
const gulp = require("gulp")
const sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

const browsersync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");


const path = {
styles:{
    src:"src/scss/**/*.scss",
    dest:"dist/assets/css"
}
}

function style(){
    return gulp
    .src(path.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.styles.dest))
    .pipe(browsersync.stream())

}
function browsersyncServer(cb){
    browsersync.init({
        server:{
            baseDir:'dist'
        }
    });
    gulp.watch('**/*html').on("change",browsersyncReload)

    gulp.watch('src/**/*.scss',style)
    cb();
}

function browsersyncReload(){
    browsersync.reload();
    
}





exports.style =style;
exports.browsersyncReload= browsersyncReload;
exports.browsersyncServer =browsersyncServer;

const build = gulp.parallel(style,browsersyncReload,browsersyncServer)

gulp.task("default",build)