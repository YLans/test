<?php
    require_once('config.php');
    $cardsSQL = 'SELECT * FROM `products`';
    $cards = $db->query($cardsSQL);
    $cardsArr = $cards->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($cardsArr);
?>