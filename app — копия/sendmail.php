<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'PHPMailer-6.7.1/language/');
$mail->IsHTML(true);

// From who
$mail->setFrom('Folomieiev.m@gmail.com', 'Maksym Folomieiev');
// To who
$mail->addAddress('Folomieiev.m@gmail.com');
// Theme
$mail->Subject = 'Theme for mail'

$body = '<h1>Some heading</h1>'
if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['phone']))){
	$body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
	$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

// Sending
$mail->send()
if(!$mail->send()) {
	$message = 'Error'
} else {
	$message = 'Data sended'
}

$response = ['message' => $message]

header('Content-type: application.json')
echo json_encode($response)