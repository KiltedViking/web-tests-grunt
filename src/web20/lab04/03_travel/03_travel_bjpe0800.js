/**********************************************************************************
* Purpose:		Code for webpage 03_travel_bjpe0800.html, which is part of an
*				assignment on the course Web 2.0 with AJAX at miun.se.
* Created by:	Bjorn G.D. Persson (bjpe0800)
* Created:		2012-02-14
**********************************************************************************/
//Global variables to keep articles in
var artiklarXML, artiklarJSON;

/*** Application specific functions **********************************/

function showDestinations() {
	var lstDest = document.getElementById("lstDestination");
	var dep = document.getElementById("lstDeparture");
	var index = dep.selectedIndex; 
	var depName = dep.options[index].value;
	
	//Remove existing options
	clearChildElements(lstDest);
	
	if(depName.length > 0)
		getDestinations(depName);
}

/*** AJAX functions **********************************/
function getDestinations(dep) {
	//Request text file from server asynchronous
	var ajax = new XMLHttpRequest();
	
	//Add event handler for handling returned request
	ajax.onreadystatechange = function()
	{
		//If request loaded - add file content to div tag
		if (ajax.readyState == 4 && ajax.status == 200)
		{
			addDestinationsToList(ajax.responseXML);
		}
	}
	
	//Open connection and send request
	ajax.open("GET","03_travel/" + dep + "-resmal.xml");
	ajax.send('');			
}

/*** DOM functions **********************************/
//Clears all child elements from element in argument
function clearChildElements(elem) {
	for(var i = elem.childNodes.length; i > 1 ; i--)
		elem.removeChild(elem.childNodes[i-1]);		
}

//Adds option element to sel with text and value (optional)
function addOption(sel, text, value) {
	var opt = document.createElement("option");
	opt.appendChild(document.createTextNode(text));
	if(value)
		opt.setAttribute("value", value);
	else
		opt.setAttribute("value", text);
	sel.appendChild(opt);
}

//Add articles to page by adding DOM elements from XML data
function addDestinationsToList(xml) {
	var lstDest = document.getElementById("lstDestination");
	var dests = xml.getElementsByTagName("r");
	
	if(dests)
	{
		for(var i = 0; i < dests.length; i++)
		{
			//Test if .textContent works - otherwise use .text (for IE)
			addOption(lstDest, dests[i].textContent ? dests[i].textContent : dests[i].text);
		}
	}
}