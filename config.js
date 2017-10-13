//项目路径设置
var path=require('path');
//接受从npm传递过来的参数
var argv=null;
try { 
    argv = JSON.parse(process.env.npm_config_argv).original;
}	
catch(ex){    
    argv = process.argv;
}
if(argv[argv.length-1]=="undefined" ||argv[argv.length-1]=="" ) {
	console.log("当前项目目录不存在，请确认参数！");
	return false;
}
var activeProject=argv[argv.length-1].replace(/^--/g,"");
//当前活动项目
var entryPath=path.resolve(__dirname,"entry/"+activeProject);
var __path={
	basePath:entryPath,
	appPath:path.resolve(entryPath, "app"),//app目录
	entry: path.resolve(entryPath, "app/index.js"),//入口js
	build: path.resolve(entryPath, "build"),//构建目录
	HTMLPath:path.resolve(entryPath, "view"),//html目录
	resoursePath:path.resolve(entryPath, "app/resourse/"),//所有资源目录
	JSPath:path.resolve(entryPath, "app/resourse/js"),//js目录
	CSSPath:path.resolve(entryPath, "app/resourse/css"),//css目录
	IMGPath:path.resolve(entryPath, "app/resourse/img"),//image目录
	publicPath:path.resolve(entryPath, "./publish")//发布资源目录，资源构建完成后的输出目录
};
console.log("当前访问目录为"+entryPath)
module.exports=__path;
