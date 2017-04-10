(
    function ($) {
        // body...
        $.fn.trag = function(){
            console.log(this);

            
            $(this).each(function(index,obj){
                //给添加样式属性
                $(obj).css({
                    "position":"absolute",
                    "top":$(obj).offset().top,
                    "left":$(obj).offset().left,
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none"
                })
                //添加拖拽事件
                $(obj).mousedown(function(e){
                    //获取鼠标相对于拖拽物的偏移量


                    obj.x = e.offsetX;
                    obj.y = e.offsetY;
                    // console.log(e);
                      // var x = e.offsetX;
                      // var y = e.offsetY;
                      $(document).mousemove(function(e){
                            $(obj).css({
                                top:e.clientY-obj.y,
                                left:e.clientX-obj.x
                            })
                      })

                      $(document).mouseup(function(){
                            $(document).off('mousemove')
                            $(document).off('mouseup')
                      })
                })
            })
            


        }
})($)