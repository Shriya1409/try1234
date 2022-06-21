<?php
include('dbconnect.php');

$data = stripcslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);
$name = $mydata['name'];
$email = $mydata['email'];
$password = $mydata['password'];


//insert data
if(!empty($name) && !empty($email) && !empty($password)){
    $sql = "INSERT INTO `student`(name,email,password) VALUES ('$name','$email','$password')";

    if($conn->query($sql) == TRUE){
        echo "saved";
    }else{
        echo "failed";
    }
}else{
    echo"failed";
}



?>