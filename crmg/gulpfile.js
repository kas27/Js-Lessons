var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	// browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	fileinclude  = require('gulp-file-include'),
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

// gulp.task('sass', function(){ // Создаем таск Sass
// 	return gulp.src('app/sass/**/*.sass') // Берем источник
// 		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
// 		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
// 		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
// 		// .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
// });

// gulp.task('fileinclude', function(){
// 	return gulp.src(['./app/*.html', '!./app/view/**/*.html', '!./app/htm/**/*.html'])
// 	.pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('app/view'));
// })
// // gulp.task('browser-sync', function() { // Создаем таск browser-sync
// // 	browserSync({ // Выполняем browserSync
// // 		server: { // Определяем параметры сервера
// // 			baseDir: 'app' // Директория для сервера - app
// // 		},
// // 		port: 8080,
// // 		notify: false // Отключаем уведомления
// // 	});
// // });

// gulp.task('scripts', function() {
// 	return gulp.src([ // Берем все необходимые библиотеки
// 		'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
// 		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
// 		])
// 		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
// 		.pipe(uglify()) // Сжимаем JS файл
// 		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
// });

// gulp.task('css-libs', ['sass'], function() {
// 	return gulp.src('app/css/libs.css') // Выбираем файл для минификации
// 		.pipe(cssnano()) // Сжимаем
// 		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
// 		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
// });

// gulp.task('watch', ['css-libs', 'scripts'], function() {
// 	gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
// 	gulp.watch('app/*.html'); // Наблюдение за HTML файлами в корне проекта
// 	gulp.watch('app/js/**/*.js');   // Наблюдение за JS файлами в папке js
// });

// gulp.task('clean', function() {
// 	return del.sync('dist'); // Удаляем папку dist перед сборкой
// });

// gulp.task('img', function() {
// 	return gulp.src('app/img/**/*') // Берем все изображения из app
// 		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
// 			interlaced: true,
// 			progressive: true,
// 			svgoPlugins: [{removeViewBox: false}],
// 			use: [pngquant()]
// 		})))
// 		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
// });

// gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'fileinclude'], function() {

// 	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
// 		'app/css/main.css',
// 		'app/css/libs.min.css'
// 		])
// 	.pipe(gulp.dest('dist/css'))

// 	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
// 	.pipe(gulp.dest('dist/fonts'))

// 	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
// 	.pipe(gulp.dest('dist/js'))

// 	var buildHtml = gulp.src('app/view/*.html') // Переносим HTML в продакшен
// 	.pipe(gulp.dest('dist/template'));

// });

// gulp.task('clear', function (callback) {
// 	return cache.clearAll();
// })



gulp.task('fileinclude', function(){
	return gulp.src(['./app/*.html', '!./app/view/**/*.html', '!./app/htm/**/*.html'])
	.pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('app/view'));
});

gulp.task('sass', function(){
	return gulp.src('app/sass/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 version', '> 1%', 'ie 8'], {cascade: true}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/alertifyjs/dist/js/alertify.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'],  function(){
	return gulp.src('app/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache (imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});


//__________ Build-task________________________________

gulp.task('buildCss', ['sass'], function(){
	return gulp.src([
		'app/css/main.css',
		'app/css/reset.css',
		'app/css/libs.min.css',
	])
	.pipe(gulp.dest('dist/css'));
});

gulp.task('buildHtml', ['fileinclude'], function(){
	return gulp.src('app/view/*.html')
		.pipe(gulp.dest('dist/template'));
});

gulp.task('buildJs', ['scripts'], function(){
	return gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));
});



gulp.task('watch', ['build', 'css-libs'], function(){
	gulp.watch('app/sass/*.scss', ['buildCss']);
	gulp.watch('app/js/*.js', ['buildJs']);
	gulp.watch('app/**/*.html', ['buildHtml']); // Наблюдение за HTML файлами в корне проекта
});

gulp.task('build', ['clean', 'img', 'buildCss', 'buildJs', 'buildHtml'], function(){

	// var buildCss = gulp.src([
	// 	'app/css/main.css',
	// 	'app/css/reset.css',
	// 	'app/css/libs.min.css',
	// ])
	// .pipe(gulp.dest('dist/css'));

	gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
});


