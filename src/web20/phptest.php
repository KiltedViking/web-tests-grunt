<?php date_default_timezone_set("Europe/Stockholm"); ?>
<!DOCTYPE html>
<html lang="se">
<head>
	<meta charset="utf-8">
	<meta author="Bj&ouml;rn Persson (bjpe0800)">
	<title>Visa hemlighet (bjpe0800)</title>
	<style type="text/css">
		/*** HTML tags *************************************************/
		html { 
			font-family: Verdana, Helvetica, sans-serif; 
			color: black; 
			background-color: #800000; 
		}
		h1 { 
			color: white; 
			background-color: #800000; 
			text-align: center;
			margin-top: -10px;
			border-radius: 5px;
			padding: 5px;
		}
		input { font-size: 1em; }
		footer { 
			text-align: center; 
			font-size: .8em; 
			margin: 5px 0px -15px;
			border-top: solid 1px gray;
		}
		/*** IDs ******************************************************/
		#page { 
			width: 1000px; 
			margin: 0 auto;
			border-radius: 20px;
			padding: 20px;
			color: black; 
			background-color: white;
		}
	</style>
	<script type="text/javascript">
		
	</script>
</head>
<body>
<div id="page">
	<header>
		<h1>PHP test (bjpe0800)</h1>
	</header>
	
	<p>Tiden är nu <?php echo(strftime("%H:%M", time())); ?>.</p>
	
	<footer>
		<p><b>Skapad av:</b> Bj&ouml;rn G.D. Persson. <b>Uppdaterad:</b> 2012-02-05.</p>
	</footer>
</div>
</body>
</html>