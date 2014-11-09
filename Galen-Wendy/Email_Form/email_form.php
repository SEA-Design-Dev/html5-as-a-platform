<?php
// Adapted from http://tangledindesign.com/how-to-create-a-contact-form-using-html5-css3-and-php/

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $from = 'From: DemoTestSite';
  $to = 'galen.broderick@gmail.com';
  $subject = 'DemoTestSite Email';
  $human = $_POST['humanCheck'];

  $body = "From: $name\n E-Mail: $email\n Message:\n $message";
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}
?>
