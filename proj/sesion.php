<?php 
	session_start();
	// if(isset($_SESSION['username'])){
	// 	if($_SESSION['username']==$_REQUEST['username']){
	// 		$str= "已经登录，不要重复登录";
	// 	}
	// 	else{
	// 		$_SESSION['username']=$_REQUEST['username'];
	// 		$str= "新用户登录";
	// 	}
	// }
	// else{
	// 	$_SESSION['username']=$_REQUEST['username'];
	// 	$str= "新用户登录";
	// }
	// $arr1 = array( );
	// array_push($arr1,$str);
	// array_push($arr1,$_SESSION['username']);
	// print_r(json_encode($arr1));
	if(isset($_SESSION['username'])){
			$str= $_SESSION['username'];
	}
	else{
		$str= "还没有seesion的值";
	}
	$arr1 = array( );
	array_push($arr1,$str);
	print_r(json_encode($arr1));
 ?>