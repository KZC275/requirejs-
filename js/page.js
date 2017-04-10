//定义主页模块
//定义模块的方法
define(['jquery'],function($){
    // console.log('index');
    // console.log($);
    return {
        init:function(){
            //不同的页面进行不同的
            // $('#main').append('<div class="text">这是分页</div>');
            $('#main').load('../html/foot.html',function(){
            //     // $('a').click(function(){
            //     //     location.href = "http://localhost/1611/day30/app/index/";
            //     //     return false;
            //     // })
            });
            this.bind()
            return this
        },
        bind:function(){
            $('.text').click(function(){
                console.log('click');
                 return this
            })
        }
    }
})