<?php
header("Content-Type: application/json");

$userMessage = $_POST['message'] ?? '';

if (stripos($userMessage, "hello") !== false) {
    $reply = "Hi Street King 👑, karibu!";
} elseif (stripos($userMessage, "game") !== false) {
    $reply = "Currently available: Need For Speed, Prototype, Spider‑Man, ETS2, eFootball.";
} elseif (stripos($userMessage, "contact") !== false) {
    $reply = "You can reach us via toxic_vinny360 on TikTok or STREETKINGS360 socials.";
} else {
    $reply = "Nimekupokea: " . $userMessage;
}

echo json_encode(["reply" => $reply]);
?>