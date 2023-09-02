<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
function getData(){
$data=array();
$data[]=array(
'FirstName'=>$_POST['fname'],
'LastName'=>$_POST['lname'],
'Email'=>$_POST['email'],
'Number'=>$_POST['num'],
'State'=>$_POST['state'],
'City'=>$_POST['city'],

);
return json_encode($data);
}
$myfile=fopen("data.json","w");
fwrite($myfile,getData());
fclose($myfile);

}


?>