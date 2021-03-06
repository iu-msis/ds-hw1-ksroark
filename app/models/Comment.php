<?php
class Comment
{
  public $id;
  public $comment;
  public function __construct($row) {
    $this->id = isset($row['id']) ? intval($row['id']) : null;
    $this->comment = $row['comment'];
  }

  public static function fetchAll() {
  // 1. Connect to the database
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  // 2. Prepare the query
  $sql = 'SELECT * FROM Comment';
  $statement = $db->prepare($sql);
  // 3. Run the query
  $success = $statement->execute();
  // 4. Handle the results
  $arr = [];
  while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $theComment =  new Comment($row);
    array_push($arr, $theComment);
  }
  return $arr;
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT Comment (comment)
            VALUES (?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
        $this->comment
    ]);
    if (!$success) {
      //TODO: Better error handling
      die ('Bad SQL on insert');
    }
    $this->id = $db->lastInsertId();
  }

}
