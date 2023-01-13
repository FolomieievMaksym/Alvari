<?php

$link = "contacts.html";
$method = $_SERVER['REQUEST_METHOD'];
$c = true;
$message = "";
	$project_name = "Alvari";
	$admin_email  = "exampleÍ.m@gmail.com";
	$form_subject = "Form subject";

	$_POST['project_name'] = $project_name;
	$_POST['admin_email'] = $admin_email;
	$_POST['form_subject'] = $form_subject;
	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
$key: $value;
";
		}
	}

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

$name = isset($_POST['name']) ? $_POST['name'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : ''; 
$email = isset($_POST['email']) ? $_POST['email'] : '';
$userMessage = isset($_POST['message']) ? $_POST['message'] : '';
mail($admin_email, adopt($form_subject), $message, $headers );



header('Location: '.$link);