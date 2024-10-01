<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على بيانات النموذج
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // إعدادات البريد
    $to = "farloko19@gmail.com";  // استبدل هذا ببريدك الإلكتروني
    $subject = "New Contact Message from " . $name;
    
    // محتوى البريد
    $body = "You have received a new message from the contact form on your website.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // إعدادات الرأس (Header) للبريد
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
} else {
    echo "Invalid request.";
}
?>
