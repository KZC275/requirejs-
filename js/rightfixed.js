//定义主页模块
//定义模块的方法
define(['jquery'],function($){

    return {
        init:function(){
        	
        		$('body').append('<div class="fixshow">');
        		$('.fixshow').load('../html/rightfixed.html',function(){

        		});
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

