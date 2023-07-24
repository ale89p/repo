const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const path = require('path');
const fs = require('fs');

// Percorso dei file CSS da minificare e combinare
const cssSrc = '../themes/hugo-theme-pixyll-master/static/css/main.css';
const cssDest = '../themes/hugo-theme-pixyll-master/static/css/';
const basscssSrc = '../themes/hugo-theme-pixyll-master/static/css/basscss.css';
const basscssDest = '../themes/hugo-theme-pixyll-master/static/css/';

// Verifica se il file minificato esiste già
const minifiedCss = path.join(cssDest, 'main-min.css');
const isMinifiedCssExist = fs.existsSync(minifiedCss);
const minifiedBasscss = path.join(basscssDest, 'basscss-min.css');
const isMinifiedBasscssExist = fs.existsSync(minifiedBasscss);

// Task per la minificazione dei file CSS
gulp.task('minify-css', () => {
  return gulp
    .src(cssSrc)
    .pipe(cssnano())
    .pipe(
      rename({
        basename: 'main-min',
        extname: '.css',
      })
    )
    .pipe(gulp.dest(cssDest));
});

// Task per la minificazione del file basscss.css
gulp.task('minify-basscss', () => {
  return gulp
    .src(basscssSrc)
    .pipe(cssnano())
    .pipe(
      rename({
        basename: 'basscss-min',
        extname: '.css',
      })
    )
    .pipe(gulp.dest(basscssDest));
});

// Task per la combinazione dei file CSS minificati
gulp.task('combine-css', () => {
  return gulp
    .src([minifiedCss, minifiedBasscss])
    .pipe(concat('combined-min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task di watch per eseguire la minificazione dei file CSS e la combinazione solo quando ci sono modifiche effettive
gulp.task('watch', () => {
  // Se il file minificato esiste già, imposta come dipendenza per il task solo il file di origine
  const watchSrc = isMinifiedCssExist ? cssSrc : [cssSrc, minifiedCss];

  gulp.watch(watchSrc, gulp.series('minify-css', 'combine-css'));
  gulp.watch(basscssSrc, gulp.series('minify-basscss', 'combine-css'));
});

// Task predefinito che avvia la minificazione dei file CSS, la combinazione e il watch
gulp.task('default', gulp.series('minify-css', 'minify-basscss', 'combine-css', 'watch'));
