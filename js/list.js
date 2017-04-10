//定义主页模块
//定义模块的方法
define(['jquery'],function($){

    return {
        init:function(){
        	
        		$('body').append('<div class="listGoods">');
                $(".listGoods").load( '../html/list.html',function() {
                    /* Act on the event */
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
                                          function updata() {

                                              $.getJSON("json/userinformation.json", function(data) {
                                                  var bool = false;
                                                  if (data[data.length - 1]) {
                                                      user = data[data.length - 1].username;
                                                      console.log(user);
                                                      $('header .num1>span').html("你好" + user);
                                                  } else {
                                                      user = '';
                                                      bool = true;

                                                  }
                                                  $.getJSON("json/goodslist.json", function(data) {
                                                      var dataGood = data[data.length - 1].username;
                                                      //得到的是对象{jjk:{goodid:goodnumber,goodid:goodnumber}}

                                                      // console.log(dataGood)
                                                      for (var k in dataGood) {
                                                          // console.log(k);
                                                          if (k == user) {
                                                              //证明该用户登录过，而且购物车有货物，在页面更新购物车数据
                                                              //在此刷新页面显示的购物车的数据********************************************************
                                                              var goodsArr = dataGood[k],
                                                              //得到{goodid:goodnumber,goodid:goodnumber}
                                                                  htmNum = 0;
                                                              console.log(dataGood)
                                                              console.log(k)
                                                              console.log(dataGood[k]) //k不能用点，也不能用["k"]获取，因为k是字符串
                                                              var cloneTimes=-1,idArr=[];
                                                              for (var n in goodsArr) {
                                                                  cloneTimes++;
                                                                  htmNum += parseInt(goodsArr[n]);
                                                                  idArr.push( n.replace(/[^\d]/g,'') );
                                                                  // console.log( n.replace(/[^\d]/g,'') );//得到ID字符串的数字
                                                              }
                                                              console.log(idArr)//id数组
                                                              $('.fixshow .car strong').html(htmNum); //这是侧栏的
                                                              $('.goodscart .img strong').html(htmNum); //这是头部的

                                                              //在购物车的详细内容中写入数据
                                                              console.log(htmNum);
                                                              if (htmNum != 0) {
                                                                  $('.goodscart>ul>li').remove();
                                                              }
                                                              
                                                              var ele3 = "<div class='cartshow'>\
                                                              <div class='area'>\
                                                                            <span>上海黄浦区</span>\
                                                                        </div>\
                                                                        <div class='collect clear'>\
                                                                            <span class='imgcc'></span>\
                                                                            <span class='store'>1号店</span>\
                                                                            <span class='num'>共" + htmNum + "件商品</span>\
                                                                        </div>\
                                                                    <div class='mesg clear'>\
                                                                         <span class='imgcc'></span>\
                                                                         <a href=''><img src='' alt=''></a>\
                                                                         <div class='desc'>\
                                                                             <a href=''>1号生鲜，30个，江苏</a>\
                                                                             <span> X </span>\
                                                                         </div><br>\
                                                                         <div class='add clear'>\
                                                                             <a href='' class='left'>-</a>\
                                                                             <input type='text'>\
                                                                             <a href='' class='right'>+</a>\
                                                                             <span>price</span>\
                                                                         </div>\
                                                                     </div>\
                                                                     <div class='kg clear'><span>重量</span></div>\
                                                                     <div class='advice'><a href=''>意见反馈</a></div>\
                                                                     <div class='last'>\
                                                                        <em></em>\
                                                                         <i>全选</i>\
                                                                         <span>合计<strong></strong></span>\
                                                                         <a>结算</a>\
                                                                     </div>\
                                                                 </div>";
                                                                 if(htmNum == 0){
                                                                      $('.goodscart .cartshow').remove();
                                                                      console.log(111);
                                                                      console.log($('.goodscart .cartshow'));
                                                                 }
                                                              //插入数据
                                                              $('.goodscart>ul').append(ele3);
                                                              // console.log(cloneTimes);
                                                              var $clonemesg={};
                                                              //根据货物种类生成购物车的内容
                                                              $('.goodscart>ul .mesg').first().siblings('.mesg').remove();//每次刷新，先把全部mesg删掉
                                                              for(var i=0;i<cloneTimes;i++){
                                                                // console.log(11)
                                                                 $clonemesg.i=$('.goodscart>ul .mesg').first().clone(true);
                                                                $('.goodscart>ul .kg').before( $clonemesg.i);
                                                              }
                                                              //添加图片,数量，每类商品价钱合计
                                                              var summary=0;//总价
                                                              for(var i=0;i<($('.goodscart>ul .mesg>a img').length);i++){
                                                                  // console.log(data[idArr[i]]);//得到一个对象，{"num":22,"img":"121.jpg"}
                                                                $('.goodscart>ul .mesg input').eq(i).val(data[idArr[i]].num);//Cannot read property 'num' of undefined
                                                                $('.goodscart>ul .mesg>a img').eq(i).attr('src', data[idArr[i]].img);//同上
                                                                $('.goodscart>ul .mesg .add span').eq(i).html("共"+data[idArr[i]].price*data[idArr[i]].num+"元");
                                                                summary+=data[idArr[i]].price*data[idArr[i]].num;
                                                              }
                                                              // console.log($('.goodscart>ul .mesg>a img').length);
                                                              // console.log(summary);
                                                              $('.goodscart>ul .last span strong').html("￥"+summary+"元")

                                                          }
                                                      }
                                                      if (bool) {
                                                          alert("你还没有登录，请先登录");
                                                          return false;
                                                      }
                                                  })
                                              })
                                          }
                                          updata();
                      //删除购物车内容************************************************************
                                          $('body').on('click','.mesg .desc span',function(){
                                              var self=this;
                                              console.log($(this).closest('.mesg').index()-2);
                                              var deleteTarget=$(this).closest('.mesg').index()-2;
                                              console.log(user);
                                              $.ajax({
                                                  url: 'php/goodscart.php?type=delete',
                                                  type: 'get',
                                                  dataType: 'json',
                                                  data: {'username': user,'target':deleteTarget},
                                              })
                                              .done(function(success) {
                                                  console.log(success);
                                                  $(self).closest('.mesg').remove();
                                              })
                                              .fail(function(error) {
                                                  console.log(error);
                                              })
                                              .always(function() {
                                                  console.log("complete");
                                              });
                                              
                                          })

                                 //增加或者减少数量****************************************************
                                 // var user='';
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
                                         url: 'php/goodscart.php?type=number',
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
                                      var goodObj={};
                                      // console.log($(this).closest('li').index());
                                     $.getJSON("json/goodslist.json", function(data) {
                                          for(var i=0;i<data.length-1;i++){
                                                if( data[i].num!=0 ){
                                                    goodObj["goodid"+i]=data[i].num;
                                                }
                                          }
                                          // console.log(user);//得到用户名
                                          $.ajax({
                                              url: 'php/goodscart.php?type=add',
                                              type: 'get',
                                              dataType: 'json',
                                              data: {'goodsNum': goodObj,'id':user},
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

                              // 跳转到详情页
                              $('body').on('click', '.goods li .p1 a', function(event) {
                                event.preventDefault();
                                /* Act on the event */
                                window.location.href='details.html';
                              });
                            
                });
        		
            return this;
        },
        bind:function(){
            $('.text').click(function(){
                console.log('click');
                 return this
            })
        }

    }
})
