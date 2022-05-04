<?php

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$proselect = $_POST['proselect'];

$em = '<'.$email.'>';

$name = $firstname . ' ' . $lastname .' '.$em;

$mailheader = "From:".$name."<".$email.">";

$recipient = "manian523@gmail.com";

mail($recipient, $proselect, $mobile, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body style="background-color: #ffc20f;">
<div class="logoty">
<a href="index.html"><img src="images/homeBtnyt.png"/></a>
<img src="images/logo_ty.png" style="margin-left: 80%;margin-top: 2%;"/>

</div>

    <div class="container">
        <h1 style="font-size:130px;margin-left:25%;color: #20409a;text-decoration: none;">THANK YOU </h1>
        <h3 style="font-size:20px;text-decoration: none; margin-left:35%;">Our representative will connect with you shortly.</h3>
        <img src="images/budd_ty.png" style="padding-top:-180px;"/>
        <p class="back"><a href="index.html"><img src="images/prevBtn_ty.png"</a></p>
    
    </div>

   
</body>
</html>
';
?>

