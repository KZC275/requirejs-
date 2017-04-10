$(function() {

    (function() {
        
    	//头部左边
    	function header(){
    		$('.num2').hover(function() {
                /* Stuff to do when the mouse enters the element */
                $('.ul').css({
                    'display': 'block',
                    'z-index': 2000,
                    'left': $('.city')[0].offsetLeft,
                    'top': $('.city')[0].offsetTop + $('.city').innerHeight()
                });
                $('.city').css('border-bottom', 'none');
                $('.num2 .city .bg').css('background', 'url(img/sprite_new.png) -331px 0');
            }, function() {
                /* Stuff to do when the mouse leaves the element */
                $('.ul').css('display', 'none');
                $('.city').css('border-bottom', 'block');
                $('.num2 .city .bg').css('background', 'url(img/sprite_new.png) -316px 0');
            });

    		//头部右边
    		$('.right>li').hover(function() {
    		    /* Stuff to do when the mouse enters the element */
    		    $(this).find('ul').css({
    		        display: 'block',
    		        property2: 'value2'
    		    });
    		    $(this).css({
    		        border: '1px solid gray',
    		        background: 'white'
    		    });
    		    $(this).find('.bg').css('background', 'url(img/sprite_new.png) -331px 0');

    		}, function() {
    		    /* Stuff to do when the mouse leaves the element */
    		    $(this).find('ul').css({
    		        display: 'none',
    		        property2: 'value2'
    		    });
    		    $(this).css({
    		        border: 'none',
    		        background: 'none'
    		    });
    		    $(this).find('.bg').css('background', 'url(img/sprite_new.png) -316px 0');
    		});

    		
    		// <!-- logo以及搜索购物车 -->
    		$('.toggle p').hover(function() {
    		    /* Stuff to do when the mouse enters the element */
    		    $('.toggle').css('overflow', 'visible');



    		}, function() {
    		    /* Stuff to do when the mouse leaves the element */
    		    $('.toggle').css('overflow', 'hidden');
    		});

    		//***** 这个点击事件不能放在hover里面，否则每次hover都会绑定事件，导致多次绑定
    		$('.toggle p').click(function(event) {
    		    // Act on the event 
    		    console.log($(this).index());
    		    var $sonFirst = $('.toggle p').eq($(this).index()).clone(true, true);
    		    $('.toggle p').eq($(this).index()).remove();
    		    $('.toggle').append($sonFirst);
    		});

    		// <!-- //商品信息 -->
    		$('.info>li').hover(function() {
    		    /* Stuff to do when the mouse enters the element */
    		    $(this).find('ul').css('top', -this.offsetTop);
    		    // console.log(this.offsetTop);
    		}, function() {
    		    /* Stuff to do when the mouse leaves the element */
    		});
            for(var k=0;k<11;k++){
                var $clone=$('.info>li').first().clone(true,true);
                $('.info').append($clone);//通过克隆出来
                // console.log($clone)
            }
          


    	}
    	header();
// 头部js结束，公共js结束


    // <!-- 专属活动 -->
        function slip() {
            var i = 1;
            var n = 0;
            $('.zhuanshu .top span').eq(0).css('background', 'orange');
            $('.zhuanshu>em').click(function(event) {
                n++;
                if (n >= 3) {
                    n = 0;
                }
                $('.zhuanshu .top span').css('background', '#eee');
                $('.zhuanshu .top span').eq(n).css('background', 'orange');
                /* Act on the event */
                if (i >= 3) {
                    $('.lunbo>ul').css('left', 0);
                    i = 1;
                }
                console.log($('.lunbo>ul').find('li').width());
                $('.lunbo>ul').animate({
                        'left': -i * $('.lunbo>ul').find('li').width()
                    },
                    1000,
                    function() {
                        /* stuff to do after animation is complete */
                    });
                i++;
            });
        }
        slip();

        // 楼梯效果******************
        function louti() {
            if ($(window).scrollTop() <= 1460) {
                $('#loutiNav').css('display', 'none');
            } else {
                $('#loutiNav').css('display', 'block');
            }
            var bool = true; //用于点击的时候防止滚动条也滚动
            $('#loutiNav li').click(function(event) {
                bool = false;
                /* Act on the event */
                console.log($(window).scrollTop())
                var self = $(this);
                //给body绑定动画，改变的是滚动条的值
                $('body').animate({ 'scrollTop': ((parseInt(self.text()) - 1) * 432 + 1460) }, 1000, function() {
                    //完成动画后改变bool
                    bool = true;
                })
            })
            $(window).scroll(function(event) {
                if ($(window).scrollTop() >= 1460) {
                    $('#loutiNav').css('display', 'block');
                } else {
                    $('#loutiNav').css('display', 'none');
                }
                if (bool) {
                    /* Act on the event */
                    //绑定滚动事件
                    var current = $(window).scrollTop(); //计算当前滚动条的值
                    for (var i = 0; i < $('#loutiNav li').length; i++) {
                        if ((current - 1460) / 432 >= i && (current - 1460) / 432 < i + 1) {
                            //给当前的楼层添加样式，而且移除其他楼层的样式
                            $('#loutiNav li').eq(i).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
                        }
                    }
                }
            })
            // 楼梯里面的轮播图
            function smallshift(){
                var i=0,length=0;
                var $oSpan=$('<span/>').appendTo( $('.louti .move .img .btn li'));
                function move(){
                    //生成一个span覆盖li
                    $('.louti .move .img .btn li span').eq(i).css({
                        height:8,
                        width: length,
                        background:'red',
                        display:'block'
                    });
                    // console.log( $oSpan );
                    length++;

                    if(length>=30){
                        $('.louti .move .img .btn li span').eq(i).css('background', 'gray');
                        length=0;
                        i++;
                        if(i>2){
                            i=0;
                        }
                        $('.louti .move .img>li').animate({left: -330*i}, 200);
                    }

                }
                 timersmall=setInterval(move,100);


                $('.louti .move .img .btn span').hover(function() {
                    /* Stuff to do when the mouse enters the element */
                    clearInterval(timersmall);
                    var self=this;
                    $('.louti .move .img>li').stop(true).animate({left: -330 * $(self).closest('li').index()}, 200);
                    $('.louti .move .img .btn li span').css('background', 'gray');
                    $(this).css('background', 'red');
                    // console.log($(self).closest('li').index());
                }, function() {
                    /* Stuff to do when the mouse leaves the element */
                    timersmall=setInterval(move,100);
                    $(this).css('background', 'gray');
                });
            }
            smallshift();
            // console.log($('#main').offset());
            // 楼梯里面的轮播图到这里完成******************************************

            //克隆楼梯
            for(var k=0;k<9;k++){
                var $clone=$('.stairsfloorBox #main>div').first().clone(true,true);
                $('#main').append($clone);//通过克隆出来
                // console.log($clone)
            }
        }
        louti();
        // <!-- #3f3c3c右边侧栏右边侧栏右边侧栏右边侧栏右边侧栏 -->
        function fixed() {
            $('.fixshow a').hover(function() {
                /* Stuff to do when the mouse enters the element */
                $(this).find('.n2').css('background', '#ff5c4d');
                $(this).find('.n2').animate({
                        'left': -60,
                    },
                    400,
                    function() {
                        /* stuff to do after animation is complete */
                    });
            }, function() {
                /* Stuff to do when the mouse leaves the element */
                var self = this;
                $(this).find('.n2').stop(true).animate({
                        'left': 0,
                    },
                    100,
                    function() {
                        /* stuff to do after animation is complete */
                        $(self).find('.n2').css('background', 'none');
                    });
            });
        }
        fixed();

        //大轮播图
        function bigshift() {
            var i = 0,
                n = 750;

            $('.btnroundne').click(function(event) {
                clearInterval(timerbig);
                /* Act on the event */
                i = i >= 4 ? 0 : i++;
                $('.shift .limove').css('left', -i * n);
                timerbig = setInterval(move, 1000);
            });

            $('.btnroundpr').click(function(event) {
                clearInterval(timerbig);
                /* Act on the event */
                i = i >= 1 ? i-- : 4;
                $('.shift .limove').css('left', -i * n);
                timerbig = setInterval(move, 1000);
            });
             timerbig = setInterval(move, 1000);

            function move() {
                $('#btn li').removeClass('active');
                $('#btn li').eq(i).addClass('active');
                $('.shift .limove').animate({
                        left: -n * i
                    },
                    1000,
                    function() {
                        /* stuff to do after animation is complete */
                        i++;
                        if (i >= 5) {
                            i = 0;
                            $('.shift .limove').css('left', 0);
                        }
                    });
            }
        }
        bigshift();

        // <!-- 头部悬浮搜索栏 -->
        function float(){
       		 $('.float').css('height','0');
       		 $(window).scroll(function(event) {
       		 	/* Act on the event */
       		 		if ($(window).scrollTop() >= 700) {
       		 			$('.float').animate({
       		 				'height': 50},
       		 				200, function() {
       		 				/* stuff to do after animation is complete */
       		 				$('.float').css('height',50);
       		 				$('.float li').css('display','block')
       		 			});
       		 		}
       		 		else{
       		 			$('.float').css('height','0');
       		 			$('.float li').css('display','none')
       		 		}

       		 });

       		 // hover出现商品信息&************************
       		 var $ul=null;
       		 $('.float .first').hover(function() {
       		 	/* Stuff to do when the mouse enters the element */

       		 	var $ul=$('.shift .box').clone(true);
       		 	console.log( $ul.height());
       		 	$ul.css({
       		 		'position':'absolute',
       		 		'left': $('.float .wrap').offset().left,
       		 		'top': $('.float .wrap').height()+$('.float .wrap').offset().top
       		 	});
       		 	console.log( $ul)
       		console.log( $ul.offset().left);
       			console.log( $('.float .wrap').offset().left )
       		 	// $('.float .first').append($ul);
       		 	$('body .clone').append($ul);

       		 }, function() {
       		 	/* Stuff to do when the mouse leaves the element */
       		 	// $('.float .first>div').remove();
       		 	$('body .clone>div').remove();

       		 });
       		

        }
        float();

    })()
    //匿名函数结束
})
