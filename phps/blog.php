<?php
$host = 'localhost';
$database_name = 'prasheelsoni';
$database_user_name = 'admin';
$database_password = 'e3UtQpE737lv';

// connect to mongodb on LOCALHOST
   //$m = new MongoClient();

//connect to mongodb on OPENSHIFT
	 $db_connection = getenv('OPENSHIFT_MONGODB_DB_URL') ? getenv('OPENSHIFT_MONGODB_DB_URL') . $db_name : "mongodb://localhost:27017/" . $db_name;
	 $m=new MongoClient("$db_connection");

   $db = $m->$database_name;
  // echo "Database mydb selected";

$collection=$db->blog;
$posts=$collection->find();
var_dump(iterator_to_array($posts));
?>
