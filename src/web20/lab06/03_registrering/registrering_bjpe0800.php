<?php//List of users (should be stored in database, but to make solution simpler... :-))$users = array("ann", "john", "grant");	
	
//Get username and password from request$username = $_GET['username'];
$password = $_GET['password'];

//Check existence of username and return result
if(usernameExists($username, $users))
{
	echo "FEL: Användarnamn finns tyvärr redan! Vänligen försök med ett annat användarnamn.";
	//Send E-mail with confirmation	
}else
{
	echo "Ditt användarkonto har skapats.";
	//Create account	
}

function usernameExists($name, $userArray)
{
	foreach($userArray as $user)
	{
		if(strtolower($name) == strtolower($user))
			return true;
	}
	
	return false;
}?>