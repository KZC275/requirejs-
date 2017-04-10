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

            if($_GET['type']=='add'){
                //存储新接收到的聊天纪录
                //echo '存储新接收到的聊天纪录';
                 $chatContentStr = file_get_contents('../json/goodslist.json');
                 $chatContent = json_decode($chatContentStr);

                 $name = $_GET['goodsNum'];//这是对象
                 $content = $_GET['id'];
                 $arr1 = array( );
                $arrlength=count($chatContent);
                // echo $arrlength;
                for($i=0;$i< $arrlength;$i++){
                    if($i==$arrlength-1){
                        // array_push($arr1,$chatContent[$i]);
                        $chatContent[$arrlength-1]->username->$content=$name;
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
            }else if($_GET['type']=='number'){//***************************表示删除删除删除删除删除
                //存储新接收到的聊天纪录
                //echo '存储新接收到的聊天纪录';
                 $chatContentStr = file_get_contents('../json/goodslist.json');
                 $chatContent = json_decode($chatContentStr);
                 $arr1 = array( );
                $arrlength=count($chatContent);
                // echo $arrlength;
                for($i=0;$i< $arrlength;$i++){
                    if($_GET['id'] == $i){
                        $chatContent[$i]->num=$_GET['goodsNum'];
                    }
                    array_push($arr1,$chatContent[$i]);
                }
                //将修改好的json对象储存到json文件中去
                    //将json对象转换成json的字符串
                 $chatStr = json_encode($arr1);
                        //file_put_contents()将数据写文件  第一参数文件名  第二个参数是文件内容
                 file_put_contents('../json/goodslist.json', $chatStr);
                 $result =  array('status' => 1, 'msg'=>'请求成功');
            }else if($_GET['type']=='delete'){
                //***************************表示删除删除删除删除删除
                 //存储新接收到的聊天纪录
                 //echo '存储新接收到的聊天纪录';
                  $chatContentStr = file_get_contents('../json/goodslist.json');
                  $chatContent = json_decode($chatContentStr);
                 $arr1 = array( );
                 $arr2 = array( );
                 $cfg22 = new StdClass();//创建空对象,大对象
                 $arrlength=count($chatContent);
                 // echo $arrlength;
                 for($i=0;$i< $arrlength;$i++){
                     // if($_GET['idcard'] != $chatContent[$i]->idcard){
                     //     array_push($arr1,$chatContent[$i]);
                     // }
                    if($i==$arrlength-1){
                        $newObj=$chatContent[$arrlength-1]->username;
                        //username对象{"jjk":{"":""},"kkl":{"":""}}
                        // print_r($newObj);
                        foreach($newObj as $key3 => $val){
                          // echo $key.'-'.$val;
                           if( $key3==$_GET['username'] ){//得到一个对象{goodid:goodnumber,goodigd1:goodnumber}
                                foreach($val as $key2 => $value){
                                    array_push($arr2,'{'.'"'.$key2.'"'.':'.'"'.$value.'"'.'}');//[{goodid:goodnumber},{goodigd1:goodnumber}]
                                }
                                 
                                $cfg = new StdClass();//创建空对象，被包含的对象
                                for($k=0; $k< count($arr2);$k++){
                                    if($k!=$_GET['target']){
                                        $arr2[$k]=json_decode($arr2[$k]);
                                        // print_r( gettype($arr2[$k]) );
                                        foreach ($arr2[$k] as $key1 => $val) {
                                            # code...
                                            $cfg->$key1=$val;
                                        }
                                    }
                                }
                                // print_r($cfg);
                                //重新把删除后的信息放回到原来的位置
                                $cfg22->$key3= $cfg;
                                
                           }
                           else{
                              
                              $cfg22->$key3=$val;
                           }

                        }
                        $chatContent[$arrlength-1]->username=$cfg22;
                        array_push($arr1,$chatContent[$i]);
                        // print_r($cfg22);
                    }
                    else{
                        array_push($arr1,$chatContent[$i]);
                    }

                 }
                  $chatStr = json_encode($arr1);
                // file_put_contents()将数据写文件  第一参数文件名  第二个参数是文件内容
                file_put_contents('../json/goodslist.json', $chatStr);
                $result =  array('status' => 1, 'msg'=>'请求成功','data'=>$chatStr);
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