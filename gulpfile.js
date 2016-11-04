/*
	目的：编译sass文件
	1）引入gulp和gulp-sass两个包
	2）编写任务
	3）运行任务
 */

//严格模式
//'use strict';

//1）引入包
var gulp = require('gulp');//本地安装为了在这里引入gulp
var sass = require('gulp-sass'); //sass编译
var rename = require('gulp-rename');//改名
var jsmin = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat');//合并文件
var browserSync = require('browser-sync').create(); //浏览器同步

// 2)编写任务

//sass编译任务
gulp.task('buildSass',function(){
	// 匹配文件
	 	gulp.src('./app/sass/*.scss')

		// 编译
		.pipe(sass({outputStyle:'nested'}))
		// 输出未压缩版本文件
		.pipe(gulp.dest('./app/css'))
		
		//编译
		//.pipe(sass({outputStyle:'compressed'}))
		//改变压缩文件名字
		//.pipe(rename({suffix:'.min'}))
		//输出压缩文件
		//.pipe(gulp.dest('./app/css'))

		// 输出文件后可以确定css完成编译
		// 刷新操作一定要在编译完成后进行
		.pipe(browserSync.reload({stream:true}));
});

//压缩css
gulp.task('compressCSS',function(){
	// 匹配文件
	 	gulp.src('./app/sass/*.scss')
		//编译
		.pipe(sass({outputStyle:'compressed'}))
		//改变压缩文件名字
		.pipe(rename({suffix:'.min'}))
		//输出压缩文件
		.pipe(gulp.dest('./dist/css'))
});

//压缩JS
gulp.task('compressJS',function(){
	// 匹配文件
	 	gulp.src('./app/js/*.js')
		.pipe(concat('app.js'))
		// 压缩
		.pipe(jsmin())
		//输出压缩文件
		.pipe(gulp.dest('./dist/js'))
});

// 监听sass文件修改，并自动编译
gulp.task('jtSass',function(){
	gulp.watch('./app/sass/*.scss',['buildSass']);
});

// 运行任务（全局安装为了运行gulp任务）
// 在命令提示符进行
// 格式：gulp 任务名
// 同步测试

//合并文件


//浏览器同步任务   顺带执行  监听sass任务
gulp.task('server',['jtSass'],function(){
	browserSync.init({
		server:{
			baseDir:'./app'
		},

		// 监听文件修改并自动刷新
		// **代表任意目录
		// *代表任意文件名
		files:['./app/**/*.html','./app/css/*.css','./app/js/*.js']
	});
})
