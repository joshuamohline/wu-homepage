<?php

foreach ($_REQUEST AS $allowedVariable=>$currentValue)
  $$allowedVariable = ((strlen($$allowedVariable)) ? $$allowedVariable : $_REQUEST[$allowedVariable]);

ini_set("error_reporting","0");

ini_set("magic_quotes_gpc","0") ;

define(VOLT_REGEX_EMAIL_VALID_ADDRESS,
  '[[:alnum:]._\!\%-]+@(([[:alnum:]-])+[.])+([A-Za-z]){2,}');


$emails = "hello@worshipu.com";

$mailBody = "\n" .
"WorshipU Contact Form Submission\n " .
"\n" .
"SUBMITTED -- " . date("F j, Y, g:i a") . ".\n" .
"------------------------------------------\n" .
"\n" .
"Name: $name\n " .
"Email: $email\n " .
"Topic: $topic\n " .
"Subject: $subject\n " .
"Question:\n" .
"$body\n";

mail($emails, "Contact: Worshipu.com", $mailBody, "From: $email" );
header("Location: /contact/?thanks=true");

?>
