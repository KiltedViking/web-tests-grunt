/**********************************************************************
* Purpose:		
* Created by:	Björn G.D. Persson (bjpe0800)
* Created:		2012-03-03
* Comments:		Some code is based on code from the course Web 2.0 with
*				AJAX at miun.se.
*				Also, minifier should be run on this code as I tend to
*				like white spaces to make code easier to read. :-)
**********************************************************************/

var bjpe0800 = bjpe0800 || {};	//Create namespace - reuse if already exists

//Constructor for class Duel requiring URI to data file and event handler
// to handle data loaded. Argument to event handler is data as array.
bjpe0800.Duel = function(data, eventHandler) 
{
	var ajax = bjpe0800.getXHRObject();
	
	ajax.onreadystatechange = function() 
	{
		if(ajax.readyState == 4) 
		{
			var res = ajax.responseText.split(",");	//Create array of data
			eventHandler(res);
		}
	}
	
	ajax.open("get",data);
	ajax.send();
}

//Method for creating XMLHttpRequest object
bjpe0800.getXHRObject = function() 
{
	var xhr = null;
	
	try 
	{    	xhr = new XMLHttpRequest();  //Browser that follows standard    } 
	catch(err1) 
	{    	try 
		{      		xhr = new ActiveXObject("Microsoft.XMLHTTP");	//Some IE versions    	} 
		catch(err2) 
		{      		try 
			{        		xhr = new ActiveXObject("Msxml2.XMLHTTP");	//Some other IE versions      		} 
			catch(err3) 
			{        		xhr = false;			} 
		}	}
	
	xhr = new XMLHttpRequest();
	
	return xhr;
}