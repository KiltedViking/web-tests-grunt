<?php
	
//Get username and password from request
$password = $_GET['password'];

//Check existence of username and return result
if(usernameExists($username, $users))
{
	echo "FEL: Användarnamn finns tyvärr redan! Vänligen försök med ett annat användarnamn.";
	//Send E-mail with confirmation	
}
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
}