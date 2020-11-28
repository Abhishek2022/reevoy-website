<?php
    if(isset($_POST['btn-send']))
    {
        $Iec = $_POST['iec'];
        $Phone = $_POST['phone'];
        $Email = $_POST['email'];
        $Name = $_POST['name'];

        $mailTo = "avishekprasad26@gmail.com";
        $subject = $Email;
        $txt = $Iec;
        $headers = $Phone;

        mail($mailTo, $subject, $txt, $headers);
        header("Location : index.html");

    }
?>