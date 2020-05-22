/**********************************************************************
* Purpose:		Solution to exercise 06 on course Web 2.0 with AJAX at
*				miun.se.
* Created by:	Björn G.D. Persson (bjpe0800)
* Created:		2012-03-04
* Comments:		Some code is based on code from the course Web 2.0 with
*				AJAX at miun.se.
*				Also, minifier should be run on this code as I tend to
*				like white spaces to make code easier to read. :-)
**********************************************************************/

var bjpe0800 = bjpe0800 || {};	//Create namespace - reuse if already exists

//Constructor for class LoginText requiring URI to data file and event handler
// to handle data loaded. Argument to event handler is data as text.
bjpe0800.CreateAccount = function(uri, eventHandler) 
{
	var ajax = bjpe0800.getXHRObject();
	
	ajax.onreadystatechange = function() 
	{
		if(ajax.readyState == 4) 
			eventHandler(ajax.responseText);
	}
	
	ajax.open("get", uri);
	ajax.send();
}

//Method for creating XMLHttpRequest object
bjpe0800.getXHRObject = function() 
{
	var xhr = null;
	
	try 
	{
	catch(err1) 
	{
		{
		catch(err2) 
		{
			{
			catch(err3) 
			{
		}
	
	xhr = new XMLHttpRequest();
	
	return xhr;
}