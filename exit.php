<?php
    setcookie('user', $user['name'], time() - 3600, "/");
    setcookie('id', $user['id'], time() - 3600, "/");
    setcookie('link1', $user['link1'], time() - 3600, "/");
    header('Location: /');
?>