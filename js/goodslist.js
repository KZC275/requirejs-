//定义主页模块
//定义模块的方法
define(['jquery','header','list','rightfixed'],function($,header,list,rightfixed){

    return {
        init:function(){
        	header.init();
        	list.init();
            rightfixed.init();

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

