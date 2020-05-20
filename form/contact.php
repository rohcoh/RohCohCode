<?php
if(isset( $_POST['form_name']))
$name = $_POST['form_name'];
if(isset( $_POST['form_email']))
$email = $_POST['form_email'];
if(isset( $_POST['form_message']))
$message = $_POST['form_message'];
if(isset( $_POST['form_subject']))
$subject = $_POST['form_subject'];


$content="From: $name \n Email: $email \n Message: $message";
$recipient = "rcsulfur@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("There seems to have been an error while submitting. Please try again later.");
echo "Email sent!";
        
        
?>