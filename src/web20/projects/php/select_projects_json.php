<?php
  //header("Content-type: text/xml"); 
  header("encoding: utf-8");
  error_reporting(0);
  $temp = json_encode(array("dberror" => "Can't connect to database...", "projects" => array()));
  $db = mysql_connect("localhost", "bjpe0800", "noshit") or die($temp);
  mysql_select_db("projects");
  $sql = "SELECT * FROM projects ORDER BY name";
  
  $res = mysql_query($sql);
  
  $xml_output .= '{ "projects": [';
  $rows = mysql_num_rows($res);
  for($i = 0; $i < $rows; $i++)
  //while($row = mysql_fetch_assoc($res))
  {
    $row = mysql_fetch_assoc($res);
    $xml_output .= '{';
    $xml_output .= '"id": ' . utf8_encode ($row["id"]) . ", ";
    $xml_output .= '"name": "' . utf8_encode ($row["name"]) . '", ';
    $xml_output .= '"created": "' . utf8_encode ($row["created"]) . '", ';
    $xml_output .= '"startdate": "' . utf8_encode ($row["startdate"]) . '", ';
    $xml_output .= '"enddate": "' . utf8_encode ($row["enddate"]) . '", ';
    $xml_output .= '"responsible": "' . utf8_encode ($row["responsible"]) . '", ';
    $xml_output .= '"comments": "' . utf8_encode ($row["comments"]) . '"';    
    
    if($i == $rows - 1)
      $xml_output .= "}\n";
    else    
      $xml_output .= "},\n";
  }
  $xml_output .= "]}";
  echo $xml_output;
  
  //json_encode($res);
?>