<?php

require '../../app/common.php';




// 1. Goto the database and get all work associated with $taskId
$commentArr = Work::fetchAll();

// 2. Conver to JSON
$json = json_encode($commentArr);

// 3. Print
echo $json;
