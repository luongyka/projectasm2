<?php
include('database.php');
$db=getDB;
if($db){
    $query="SELECT* FROM product";
    $result=pg_query($query);
    if(result){
        $arr=pg_fetch_all($result);
        echo json_encode($arr);
    }
}
?>