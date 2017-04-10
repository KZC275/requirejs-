<?php 
    //1返回所的有聊天纪律
    //2 存储接收到的聊天记录
    //请求数据的结构 
    // type= send /query   发送 的类型  是添加聊天纪录还是获取聊天纪录
    //username = sender 发送消息的用户名
    //content = 内容  发送的消息
    //判断是否是get请求
    

    //  $chatContentStr = file_get_contents('../json/goodslist.json');
    //  $chatContent = json_decode($chatContentStr);
    

    // $arr1 = array( );
    // $arrlength=count($chatContent);
    // echo $arrlength;
    // for($i=1;$i< $arrlength;$i++){

    //     array_push($arr1,$chatContent[$i]);

    // }
    // print_r( $arr1 );
    if($_SERVER['REQUEST_METHOD']=="GET"){

        if(isset($_GET['type'])){

            if($_GET['type']=='send'){
                //存储新接收到的聊天纪录
                //echo '存储新接收到的聊天纪录';
                 $chatContentStr = file_get_contents('../json/goodslist.json');
                 $chatContent = json_decode($chatContentStr);
                 //将新的聊天纪录存储在json对象中
                 //省略对请求数据的校验
                 $name = $_GET['username'];
                 $content = $_GET['content'];
                 $id = $_GET['idcard'];
                 //将获取到的数据储存成一个关联数组
                 $msg = array('name'=>$name,'content'=>$content,'idcard'=>$id);
                 //将关联数据加入到json对象中
                 //array_push()是将目标元素添加到 数组中
                 //第一个参数  就是数组 第二个 目标元素
                 array_push($chatContent,$msg);
                //将修改好的json对象储存到json文件中去
                    //将json对象转换成json的字符串
                 $chatStr = json_encode($chatContent);
                        //file_put_contents()将数据写文件  第一参数文件名  第二个参数是文件内容
                 file_put_contents('../json/goodslist.json', $chatStr);
                 $result =  array('status' => 1, 'msg'=>'请求成功');
            }else if($_GET['type']=='number'){//***************************表示删除删除删除删除删除
                //存储新接收到的聊天纪录
                //echo '存储新接收到的聊天纪录';
                 $chatContentStr = file_get_contents('../json/goodslist.json');
                 $chatContent = json_decode($chatContentStr);

                 $name = $_GET['goodsNum'];//这是数组
                 $content = $_GET['id'];
                 $arr1 = array( );
                $arrlength=count($chatContent);
                // echo $arrlength;
                for($i=0;$i< $arrlength;$i++){
                    if($i==$arrlength-1){
                        // array_push($arr1,$chatContent[$i]);
                        $chatContent[$arrlength-1]->$content=$name;
                        array_push($arr1,$chatContent[$i]);
                        
                    }else{
                        array_push($arr1,$chatContent[$i]);
                    }
                    
                }
                //将修改好的json对象储存到json文件中去
                    //将json对象转换成json的字符串
                 $chatStr = json_encode($arr1);
                        //file_put_contents()将数据写文件  第一参数文件名  第二个参数是文件内容
                 file_put_contents('../json/goodslist.json', $chatStr);
                 $result =  array('status' => 1, 'msg'=>'请求成功');
            }else if($_GET['type']=='query'){
                //返回所有的聊天
                //echo '返回所有的聊天';
                
                //有可能聊天纪录存在数据库中
                //或者在本地文件中
                //file_get_contents()  打开本地文件并将数据进行返回
                $chatContentStr = file_get_contents('../json/goodslist.json');
                //将得到的json字符串转换成json的对象
                $chatContent = json_decode($chatContentStr);
                $result =  array('status' => 1, 'msg'=>'请求成功','data'=>$chatContent);
            }else{
                //请求的数据有问题
                $result =  array('status' => 701, 'msg'=>'参数错误');
            }
        }else{
             $result =  array('status' => 703, 'msg'=>'必须使用get请求');
        }
    }else{
         $result =  array('status' => 702, 'msg'=>'请求类型错误');
    }


    print_r(json_encode($result));
    // print_r("lll");

 ?>