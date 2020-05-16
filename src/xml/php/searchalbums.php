<?php
require("db.php");
$txtSearch = $_REQUEST['txtSearch'];

if($txtSearch)
	$sql = "SELECT albumindex, artist, title, released FROM albums WHERE artist LIKE '%$txtSearch%' OR title LIKE '%$txtSearch%' ORDER BY artist";
else
	$sql = "SELECT albumindex, artist, title, released FROM albums ORDER BY artist";
	
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
    $output .= "<album albumindex='" . $row['albumindex'] . "'>"
		. "<a>" . htmlentities($row['artist']) . "</a>"
		. "<t>" . htmlentities($row['title']) . "</t></album>";
  }
}
else {
  echo '0 results';
}

$conn->close();

header ("Content-Type:text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
echo "<?xml-stylesheet type=\"text/xsl\" href=\"searchalbums.xsl\"?>";
echo "<albums>";
echo $output;
echo "</albums>";
?>