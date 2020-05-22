/******************************************************************************
* Purpose:			Function called when page is loaded.
* Created by: 	Bj�rn G.D. Persson, kiltedviking.net, 2011-07-19.
* Requirements:	jQuery framework
******************************************************************************/
//Function called when page loaded that waits until page is fully loaded.
$(document).ready(function()
{
	//Using anchors of class externallink, add attribute target, and append a postfix.
	 $("a.externallink").attr("target", "_blank").append("&nbsp;&gt;&gt;");
});