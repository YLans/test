<?php
    require_once('config.php');
    $reseved = json_decode(file_get_contents('php://input'));
    $data = array(':name' => $reseved->name, ':price' => $reseved->price);
    $addSQL = "INSERT INTO `products` (name, price) VALUES (:name, :price)";
    $query = $db->prepare($addSQL);
    $query->execute($data);
    // echo 'success';
    $output = array('msg' => 'Добавлено успешно');
    echo json_encode($output);
?>