<?php
  //Connect to server and select database
  $db = mysql_connect("localhost", "bjpe0800", "noshit") or die("ERROR: Can't connect to database!");
  mysql_select_db("projects");
  
  $strResult = "";
  
  $sql = "SELECT id, name, created, startdate, enddate, responsible, comments FROM projects";
  
  $res = mysql_query($sql);
  
  if(mysql_errno())
    $strResult = "ERROR: There was a problem getting projects!<br><br>(Error: " . mysql_errno() . " - " . mysql_error() . ")";
  else
  {
    while($row = mysql_fetch_assoc($res))
    {
      $strResult .= "<div class=\"project\"><div><b>Project name:</b> " . $row['name']
                . "<br><b>Created:</b> " . $row['created']
                . "<br><b>Start date:</b> " . $row['startdate']
                . " <b>End date:</b> " . $row['enddate']
                . "<br><b>Responisble:</b> " . $row['responsible'] 
                . "<br><b>Comments:</b><br> " . $row['comments']
                . "</div><div class=\"projectbuttons\"><a href=\"projectinfo.php?id=" . $row['id']
                . "\" class=\"projectmoreinfo\">More info</a></div><div>&nbsp;</div>"
                . "</div>";
    }
  }
?>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="UTF-8" />
  <title>Projects - Kilted Viking's Projects</title>
  <link rel="stylesheet" href="../css/kvprojects.css" type="text/css">
  <script type="text/javascript" src="../js/jquery.min.js"></script>
  <script type="text/javascript">
  </script>
</head>
<body>
  <div id="page">
    <header>
      <h1>Kilted Viking's Projects</h1>
    </header>
    <nav id="menu">
      <h2>Menu</h2>
      <ul> 
        <li><a href="php/projects.php">Projects</a></li>
        <li><a href="project_add.php">Add project</a></li>
      </ul>
    </nav>
    <section id="main">
      <h2>Projects</h2>
      <div id="projects">
        <?php echo $strResult; ?>
      </div>
    </section>
    <footer>
      <p><b>Created by:</b> Bj&ouml;rn G.D. Persson (bjpe0800). <b>Updated:</b> 2012-05-17.</p>
    </footer>
  </div>
</body>
</html>