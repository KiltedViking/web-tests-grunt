<?php
require("db.php");
$sql = "SELECT DISTINCT artist FROM albums ORDER BY artist";

//Connect to database
$conn = new mysqli($host, $user, $pwd, $db);

if (mysqli_connect_errno()) {
  exit('Connect failed: '. mysqli_connect_error());
}

//Execute SQL and test if any rows
$res = $conn->query($sql);
$output = "";

if ($res->num_rows > 0) 
{
  while($row = $res->fetch_assoc()) {
    $output .= "<a>" . htmlentities($row['artist']) . "</a>";
  }
}
else {
  echo '0 results';
}

$conn->close();

header ("Content-Type:text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
echo "<artists>";
echo $output;
echo "</artists>";
?>