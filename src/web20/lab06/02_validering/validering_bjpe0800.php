<?php//kontrollerar förväntade användarnamn och lösenordif (($_GET['anvandarnamn'] == "per") && ($_GET['losenord'] == "1234"))
	echo "Detta är ett superhemligt meddelande";else
	echo "Du måste ange rätt användarnamn och lösenord";?>