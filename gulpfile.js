"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const createjs = require("createjs-def");
const transform = require("gulp-transform");
const rollup = require("gulp-better-rollup");
const ts = require("rollup-plugin-typescript2");
const sourcemaps = require("gulp-sourcemaps");


// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./dist/assets/"]);
}

// Optimize Images
function images() {
  return gulp
    .src("./assets/**/*")
    .pipe(newer("./dist/assets"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest("./dist/assets"));
}

function staticfiles() {
    return gulp
        .src("./public/**/*")
        .pipe(newer("./dist/"))
        .pipe(gulp.dest("./dist"))
}

// CSS task
function css() {
  return gulp
    .src("./styles/**/*.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browsersync.stream());
}

// Generate createjs definitions
function definitions() {
  return gulp
    .src("public/Animate.js")  
    .pipe(rename((name) => name.extname = ".d.ts"))
    .pipe(transform("utf8", (content) => createjs.createDef('Animate', content, 'typescript')))  
    .pipe(gulp.dest('./_build/@types'));
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src("./app/**/*.ts")
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
}


// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src("./app/main.ts")
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(rollup({plugins: [ts({cacheRoot: "_build/.rtp2_cache"})]}, "iife"))
      .pipe(rename((name) => name.extname = ".js"))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./dist/js/"))
      .pipe(browsersync.stream())
  );
}

// Watch files
function watchFiles() {
  gulp.watch([
        "./app/**/*.ts", 
        "./babelrc", 
        "./tsconfig.json",
        "./webpack.config.js",
    ], gulp.series(js, browserSyncReload));
    gulp.watch("./public/Animate.js", gulp.series(definitions, js, browserSyncReload));
    gulp.watch("./styles/**/*.scss", gulp.series(css, browserSyncReload));
    gulp.watch("./assets/**/*", gulp.series(images, browserSyncReload));
    gulp.watch("./public/**/*", gulp.series(staticfiles, browserSyncReload));
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, definitions, gulp.parallel(css, images, js, staticfiles));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// export tasks
exports.images = images;
exports.css = css;
exports.definitions = definitions;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;