$(function(){
	(function(){
		//头部左边
		function header() {
		    $('.num2').hover(function() {
		        /* Stuff to do when the mouse enters the element */
		        $('.ul').css({
		            'display': 'block',
		            'z-index': 2000,
		            'left': $('.city')[0].offsetLeft,
		            'top': $('.city')[0].offsetTop + $('.city').innerHeight()
		        });
		        $('.city').css('border-bottom', 'none');
		        $('.bg').css('background', 'url(img/sprite_new.png) -331px 0');
		    }, function() {
		        /* Stuff to do when the mouse leaves the element */
		        $('.ul').css('display', 'none');
		        $('.city').css('border-bottom', 'block');
		        $('.bg').css('background', 'url(img/sprite_new.png) -316px 0');
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

		}
		header();
	})()
})