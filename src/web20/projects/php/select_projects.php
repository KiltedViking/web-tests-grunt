<?php
  header("Content-type: text/xml"); 
  error_reporting(0);
  $db = mysql_connect("localhost", "bjpe0800", "noshit") or die("<projects><project><name>Can't connect to database...</name></project></projects>");
  mysql_select_db("projects");
  $sql = "SELECT * FROM projects ORDER BY name";
  
  $res = mysql_query($sql);
  
  $xml_output = "<?xml version=\"1.0\"?>\n"; 
  $xml_output .= "<projects>";
  
  while($row = mysql_fetch_assoc($res))
  {
    $xml_output .= "<project>";
    $xml_output .= "<id>" . $row["id"] . "</id>";
    $xml_output .= "<name>" . $row["name"] . "</name>";
    $xml_output .= "<created>" . $row["created"] . "</created>";
    $xml_output .= "<startdate>" . $row["startdate"] . "</startdate>";
    $xml_output .= "<enddate>" . $row["enddate"] . "</enddate>";
    $xml_output .= "<responsible>" . htmlentities($row["responsible"], ENT_XML1) . "</responsible>";
    $xml_output .= "<comments>" . htmlentities($row["comments"], ENT_XML1) . "</comments>";
    
    $xml_output .= "</project>";
  }
  
  $xml_output .= "</projects>";
  
  echo $xml_output;
?>