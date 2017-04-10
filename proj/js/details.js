$(function(){
	(function(){
		//hover事件改变显示的图片和放大的图片
		var moveIndex=0;
		$('.control .preview').hover(function() {
			/* Stuff to do when the mouse enters the element */
			moveIndex=$(this).index();
			$('.details .img ul li').css({
				left: -360*$(this).index(),
			});
			$('.details .img .big li').css({
				top: -900*$(this).index(),
			});
			$('.control .preview').css('border','none');
			$(this).css('border','1px solid blue');
		}, function() {
			/* Stuff to do when the mouse leaves the element */

		});

		
		// 放大镜
		function zoom(){
			var $moveDiv=null;
			$('.details ul').hover(function() {
				/* Stuff to do when the mouse enters the element */
				$('.details .big').css('display','block');
				//生成移动的透明块
				$moveDiv=$('<div class="move"><div>');
				$moveDiv.css({
					width: 160,
					height:160,
					position: 'absolute',
					background:'#eee',
					opacity:'0.3'
				});
				$('.details ul').append($moveDiv);

			}, function() {
				/* Stuff to do when the mouse leaves the element */
				$('.details .big').css('display','none');
				$('.details ul>div').remove();
			});
			//移动小盒子
			$('.details ul').mousemove(function(event) {
				/* Act on the event */
				$moveDiv.css({
					left: function(){
						var left=event.pageX-$('.details ul').offset().left-80;
						if(left<=0){left=0;};
						if(left>=200){left=200;};
						return left;},//限制移动范围
					top: function(){
						var top=event.pageY-$('.details ul').offset().top-80;
						if(top<=0){top=0;};
						if(top>=200){top=200;};
						return top;}//限制移动范围
				});

				//放大0000000000000000000000000000
				// 移动比例  400/160
				//放大倍数  600/400
				// console.log($moveDiv.offset().left -$('.details ul').offset().left);
				// console.log($moveDiv.offset().top -$('.details ul').offset().top);
				// console.log( $('.details .img .box img') );
				//大图移动
				var moveX=$moveDiv.offset().left -$('.details ul').offset().left;
				var moveY=$moveDiv.offset().top -$('.details ul').offset().top;
				$('.details .img .box li').css({
					left: -moveX*2.5,
					top: -(moveY*2.5+moveIndex*900)
				});
			});
			// console.log($('.details ul').offset())
		}
		zoom();

		// 增加减少
		$('.details').on('click', '.dynamic span a', function(event) {
			event.preventDefault();
			var number=$(this).parent().prev('input').val();
			// console.log(number);
			if($(this).html()=='+'){
			     number++;
			}else{
			     if(number>0){
			         number--
			     }
			     else{
			         alert('最少一件');
			         return false;
			     }
			}
			$(this).parent().prev('input').val(number);//改变输入框的数值
			// console.log($(this).html());
			// return false;
		})

	})()
})