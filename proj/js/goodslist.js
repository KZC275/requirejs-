$(function() {
    (function() {
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

        }
        header();

        // 头部js结束，公共js结束

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
        // <!-- #3f3c3c右边侧栏右边侧栏右边侧栏右边侧栏右边侧栏 结束结束结束-->

        //table1分类js
        function fenlei() {
            var box = {
                'img': ["品牌", "goodslistimg/fenlei1.png", "goodslistimg/fenlei2.png", "goodslistimg/fenlei1.png", "goodslistimg/fenlei1.png"],
                "fruit": ["时鲜蔬果", "果蔬礼盒", "新鲜水果", "新鲜蔬菜"],
                "sea": ["海鲜/水产品", "海参", "鲍鱼", "贝类", "甲鱼", "鱼类", "虾类", "蟹类", "藻类"],
                "meat": ["猪牛羊肉", "羊肉", "牛肉", "猪肉", "其他肉类"],
                "fly": ["家禽蛋类", "咸鸭蛋", "松花/皮蛋", "鸽", "鸭", "鸡", "鲜蛋类", "鹅", "其他蛋制品"]
            }
            var str2 = '';
            $.each(box, function(index, val) {
                /* iterate through array or object */
                var str1 = ''; //每次开始新的tr都要删除上一行的tr数据
                for (var i = 0; i < val.length; i++) {
                    // console.log(index)
                    if (index == "img") {
                        if (i > 0) {
                            str1 += "<td>" + "<a href=''><img src=" + val[i] + " alt=''></a>" + "</td>";
                        } else {
                            str1 += "<td>" + val[i] + "</td>";
                        }
                    } else {
                        str1 += "<td>" + val[i] + "</td>";
                    }
                }
                str2 += "<tr>" + str1 + "</tr>";
                // console.log(str2)
            });
            // for(var key in box){
            //     var str1='';
            //     for(var i=0;i<box[key].length;i++){
            //         str1+="<td>"+box[key][i]+"</td>";
            //     }
            //      str2+="<tr>"+str1+"</tr>";
            //      console.log(str2);
            // }
            $('.table1 .sell').before($('<table/>').append($('<tbody/>').append(str2)));

//获取json数据加载商品列表,没有发送数据*****************************************************
            $.getJSON("json/goodslist.json", function(data) {
                console.log(data);
                // console.log(data.length);
                // console.log(data[0]);
                //以字符串形式创建li里面的所有标签
                var strLi = '';
                for (var j = 0; j < data.length-1; j++) {
                    if(data[j].ice){
                        var strLiSon = "<a href=''><img src=" + data[j].img + " alt=''></a>" + "<p class='price'>" + data[j].price + "</p>"+
                        "<p class='p1'><a href=''>" + data[j].description1 + "</a></p >" + "<p class='p2'><a href=''>" + data[j].description2 + "</a></p>"+
                        "<p class='dynamic'><input type='text' value="+data[j].num+"><span>" + "<a href=''>+</a><a href=''>-</a>" + "</span><a href='javascritp:void(0);'>" + "加入购物车" + "</a></p>"+
                        "<p class='well'><a href=''>" + data[j].sell + "</a></p>" + "<p><a href=''>" + data[j].store + "</a></p>"+"<img src="+data[j].ice+" alt='' class='ice'>";
                    }
                    else{
                        var strLiSon = "<a href=''><img src=" + data[j].img + " alt=''></a>" + "<p class='price'>" + data[j].price + "</p>"+
                        "<p class='p1'><a href=''>" + data[j].description1 + "</a></p >" + "<p class='p2'><a href=''>" + data[j].description2 + "</a></p>"+
                        "<p class='dynamic'><input type='text' value="+data[j].num+"><span>" + "<a href=''>+</a><a href=''>-</a>" + "</span><a href='javascritp:void(0);'>" + "加入购物车" + "</a></p>"+
                        "<p class='well'><a href=''>" + data[j].sell + "</a></p>" + "<p><a href=''>" + data[j].store + "</a></p>";
                    }
                    strLi += "<li>"+strLiSon+"</li>";
                }
                $('.table1 .goods').append('<ul>'+strLi+'<ul/>');

            });
            //ajax请求完成*****************888888888888

            //判断用户是否登录****************************************************************************************
            var user='';
            function updata(){
                            
                            $.getJSON("json/userinformation.json", function(data) {
                                var bool=false;
                                if(data[data.length-1]){
                                    user=data[data.length-1].username;
                                    console.log(user);
                                    $('header .num1>span').html("你好"+user);
                                }
                                else{
                                    user='';
                                    bool=true;

                                }
                                $.getJSON("json/goodslist.json", function(data) {
                                    var data1=data[data.length-1].username;//得到的是对象
                                    // console.log(data1)
                                    for(var k in data1){
                                        // console.log(k);
                                        if(k==user){
                                            //证明该用户登录过，而且购物车有货物，在页面更新购物车数据
                                            //在此刷新页面显示的购物车的数据********************************************************
                                         var goodsArr=data1[k],htmNum=0;
                                         console.log(data1)
                                         console.log(k)
                                         console.log(data1[k])//k不能用点，也不能用["k"]获取，因为k是字符串
                                         for(var i=0;i<goodsArr.length;i++){
                                              htmNum+=parseInt(goodsArr[i]);
                                         }
                                         $('.fixshow .car strong').html(htmNum);//这是侧栏的
                                         $('.goodscart .img strong').html(htmNum);//这是头部的

                                          //在购物车的详细内容中写入数据
                                          console.log(htmNum);
                                          if(htmNum!=0){
                                               $('.goodscart>ul>li').remove();
                                          }
                                          var ele3="<div class='area'>\
                                                  <span>上海黄浦区</span>\
                                              </div>\
                                              <div class='collect'>\
                                                  <span>img</span>\
                                                  <span>1号店</span>\
                                                  <span>共"+htmNum+"件商品</span>\
                                              </div>\
                                          <div class='mesg'>\
                                               <span>img</span>\
                                               <a href=''>img</a>\
                                               <div class='desc'>\
                                                   <a href=''>descr</a>\
                                                   <span>img</span>\
                                               </div>\
                                               <div class='add'>\
                                                   <input type='text'>\
                                                   <span>\
                                                       <a href=''></a>\
                                                       <a href=''></a>\
                                                   </span>\
                                                   <span>price</span>\
                                               </div>\
                                                   <p>重量</p>\
                                                   <p><a href=''>意见反馈</a></p>\
                                           </div>\
                                           <div>\
                                              <span>img</span>\
                                               <span>全选</span>\
                                               <span>合计<em>2222</em></span>\
                                               <strong>结算</strong>\
                                           </div>";
                                          //插入数据
                                          $('.goodscart>ul').append(ele3);
                                        }
                                    }
                                    if(bool){
                                        alert("你还没有登录，请先登录");
                                        return false;
                                    }
                                })
                            })
                }
                updata();

           //增加或者减少数量****************************************************
           $('.table1 .goods').on('click', '.dynamic span a', function(event) {
               event.preventDefault();
               /* Act on the event */
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

//在此已经改变json数据********************************************************************
               var goodsNum=$(this).parent().prev('input').val();//获取要加入购物车的数量
               var id=$(this).closest('li').index();//加入购物车商品的顺序id

               // console.log(goodsNum);
               // console.log($(this).closest('li').index());
               $.ajax({
                   url: 'http://localhost/11proj/proj/php/goodscart.php?type=number',
                   type: 'get',
                   dataType: 'json',
                   data: {'goodsNum': goodsNum,'id':id},
               })
               .done(function(mes) {
                   console.log(mes);
               })
               .fail(function(mes) {
                   console.log(mes);
               })
               .always(function() {
                   console.log("complete");
               });

           });
           //改变json里面的已经***********************登录用户的********购物车数据
           $('.table1 .goods').on('click', '.dynamic>a', function(event) {
               event.preventDefault();
               /* Act on the event */

               //此处用于用户已经登录，但是购物车还没有数据，在这里向购物车增加数据
               // 发送的是用户名已经购物数量，分开两组发送
                //获取全部货物的数量
                // for(var i=0;i<$('.table1 .goods input').length;i++){
                //      newArr.push( $('.table1 .goods input')[i].value )
                // }

                updata();//判断是否登录

                var newArr=[];
                // console.log($(this).closest('li').index());
               $.getJSON("json/goodslist.json", function(data) {
                    for(var i=0;i<data.length-1;i++){
                          newArr.push( data[i].num )
                          // console.log( data[i].num )
                    }
                    console.log(user);//得到用户名
                    console.log(newArr);//得到全部货物
                    $.ajax({
                        url: 'http://localhost/11proj/proj/php/goodscart.php?type=add',
                        type: 'get',
                        dataType: 'json',
                        data: {'goodsNum': newArr,'id':user},
                    })
                    .done(function(mes) {
                        console.log(mes);
                        updata();
                    })
                    .fail(function(mes) {
                        console.log(mes);
                    })
                    .always(function() {
                        console.log("complete");
                    });
               })
                return false;
           });
        }
        fenlei();
    })()
    //匿名函数结束
})

// console.log($(this).closest('li').find('.p1').eq(0).text());//描述
// console.log($(this).closest('li').find('.price').eq(0).text());//价格
// console.log($(this).parent().prev('input').val());//数量
// console.log($(this).closest('p').siblings('a').html());//图片