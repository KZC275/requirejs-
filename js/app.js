
// require 第一个参数 数组  元素为加载模块的地址
//第二个参数 回调函数  为模块加载完毕以后的处理
// require(['js/slide/slide.js'],function(slide){
//     console.log(slide);

// 对模块化加载进行基本设置
requirejs.config({
    baseUrl:"js",
    //设置依赖
    shim:{
        'common_jquery':['jquery']
    },

    //加载路径  和加载对象   //省略后缀
    paths:{
        'jquery':"../../js/jquery",
        'common_jquery':"../../js/common_jquery",
        'index':"../../js/index",
        'page':'../../js/page',
        'goodslist':'../../js/goodslist',
        'header':'../../js/header',
        'list':'../../js/list',
        'rightfixed':'../../js/rightfixed'
    }

    //加载新的模块
})


//require 属于按需加载

require(["jquery",'index','page','goodslist'],function($,index,page,goodslist){
    goodslist.init();
    // console.log($);
    // $('#box').trag();
    // index.show();
  //  index.init().bind()
 // 判断加载主页还是加载分页
//  console.log(location);
    //使用hash 做路由有问题
    // var path = location.hash;
    // if(path=="#page"){
    //     page.init()
    // }else if(path=="#index"){
    //     index.init()
    // }else{
    //     index.init()
    // }

    // var path = location.pathname;

    // console.log(path);
    // if(path=="/app/page/"){
    //     page.init()
    //     console.log(path);
    // }else if(path=="/app/index/"){
    //     index.init()
    //     console.log(path);
    // }else{
    //     index.init()
    //     console.log(path);
    // }
    //如果想要添加新的页面

    //1 建一个文件夹 放入index.html
    //2 建一个新的模块 在模块里面对页面进行设置
    //3 在入口js 设置访问路由
})



//mvc m =model v = view 页面视图  c=control 控制器