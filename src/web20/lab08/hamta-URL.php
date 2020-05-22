<?php
	//Set displaying of error to off to avoid XML errors in client
	ini_set('display_errors', 'on');
	
	/*** RSS feeds **************************************************/
	define("AB_URL", "http://www.aftonbladet.se/rss.xml");
	define("DN_URL", "http://www.dn.se/m/rss/senaste-nytt");
	define("KP_URL", "http://www.expressen.se/kvp/rss");
	
	$ut = "";
	$newspaper = $_GET['newspaper'];
	
	if(isset($newspaper)) 
	{
		$newspaperUrl = "";
		
		if($newspaper == "ab")
			$newspaperUrl = AB_URL;
		else if($newspaper == "dn")
			$newspaperUrl = DN_URL;
		else if($newspaper == "kp")
			$newspaperUrl = KP_URL;
		
		$fp = fopen ($newspaperUrl, "r");
		
		while (!feof($fp) )
		{
			$ut .= fgets($fp);
		}
		
		fclose($fp);
	}
	
	header("Content-type: text/xml");
	echo $ut;
?>
