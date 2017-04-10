<?php 
    //对数据进行校验
    // print_r($_SERVER['REQUEST_METHOD']);
    // print_r($_POST);
 //   if($_SERVER['REQUSET_METHOD'] )
    $name = $_POST['username'];
    $psw = $_POST['password'];
    //php数据库操作
    $con = new mysqli('127.0.0.1','root','','demo'); //准备好数据连接对象
    //插入注册用户的数据
 //   $sql = 'insert into users (username,password,age) values("'.$name.'","'.$psw.'","'.$age.'")';//sql 语句；
   // if( $con->query($sql) ){
   //   echo '注册成功';
   // }else{
   //      echo '注册失败';
   // }
    //判断当前的用户是否已经注册

    //1获取当前所有的用户信息
    $sql = 'select * from users';
    $res = $con->query($sql);

    //2 获取的用户信息与当前注册信息进行
    $bool = true;
    //数据库查询结果的长度 $res->num_rows
    if($res->num_rows>0){
        //fetch_assoc() 执行第一次返回 第一条数据 执行第二次的时候返回第二数据
        // $row 当前获取到的每一行数据
        while ($row = $res->fetch_assoc()) {
            # code...
            //判断用户是否注册
            if($row['username'] == $name){
                $bool = false; //表示用户已注册
            }
        }
    }

    //通过判断注册的bool 去插入当前的注册用户的信息
    if($bool){
        //注册用户的sql语句
        $sql = 'insert into users (username,password) values("'.$name.'","'.$psw.'")';
        if($con->query($sql)){
            echo "注册成功";
        }else{
            echo "注册失败";
        }
    }else{
        echo '用户已注册';
    }

    //关闭数据库
    $con->close();
 ?>
