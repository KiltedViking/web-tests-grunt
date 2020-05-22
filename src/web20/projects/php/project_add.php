<?php
  //Connect to server and select database
  $db = mysql_connect("localhost", "bjpe0800", "noshit") or die("ERROR: Can't connect to database!");
  mysql_select_db("projects");
  
  //Get values from form
  $name = $_POST['txtName'];
  $startdate = $_POST['txtStartDate'];
  $enddate = $_POST['txtEndDate'];
  $responsible = $_POST['txtResponsible'];
  $comments = $_POST['txtComments'];
  
  $strResult = "";
  
  //If all mandatory fields are filled in - insert project...
  if(strlen($name) && strlen($startdate) && strlen($enddate) && strlen($responsible))
  {
    $sql = "INSERT INTO projecats(name, created, startdate, enddate, responsible, comments)"
      . "VALUES('" . $name . "', NOW(), '" . $startdate . "', '" . $enddate . "', '" . $responsible . "', '" . $comments . "')";
    
    $res = mysql_query($sql);
    
    if(mysql_errno())
      $strResult = "Project was added.";
    else
      $strResult = "ERROR: There was a problem adding project!<br><br>(Error: " . mysql_errno() . " - " . mysql_error() . ")";
  }
  else
    $strResult = "ERROR: Not all required fields contain data! <a href=\"javascript:history.back()\">Go back</a> and fill in all mandatory fields.";
?>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="UTF-8" />
  <title>Add project - Kilted Viking's Projects</title>
  <link rel="stylesheet" href="../css/kvprojects.css" type="text/css">
  <script type="text/javascript" src="../js/jquery.min.js"></script>
  <script type="text/javascript">
  </script>
</head>
<body>
  <div id="page">
    <header>
      <h1>Add project</h1>
    </header>
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li><a href="./">Projects</a></li>
        <li><a href="project_add.php">Add project</a></li>
      </ul>
    </nav>
    <section id="main">
      <h2>Result</h2>
      <div id="projects">
        <p class="center"><?php echo $strResult; ?></p>
        <p class="center"><a href="../">Continue...</a></p>
      </div>
    </section>
    <footer>
      <p><b>Created by:</b> Bj&ouml;rn G.D. Persson (bjpe0800). <b>Updated:</b> 2012-05-09.</p>
    </footer>
  </div>
</body>
</html>