    function hamtaFranServern(url, handelsehanterare) 
	{
      var XHRobjekt = null;
      try {
	        XHRobjekt = new XMLHttpRequest();  // Firefox, Opera, ... 
          }
          catch(err1) {
      try {
        XHRobjekt = new ActiveXObject("Microsoft.XMLHTTP");  // Några IE ver
      }
      catch(err2) {
        try {
          XHRobjekt = new ActiveXObject("Msxml2.XMLHTTP");  // Några IE ver
        }
        catch(err3) {
          XHRobjekt = false;
	    }//catch 3
	  }//catch 2
	}//catch 1

    if (XHRobjekt)
	{
      XHRobjekt.onreadystatechange = function() 
	  {
        if (XHRobjekt.readyState == 4) 
		{
          handelsehanterare(XHRobjekt);
          delete XHRobjekt;  //städar upp
          XHRobjekt = null;  //referensen pekar nu på null
        }//if
      }//slut på den anonym funktion som körs när tillståndet i XHR ändras
      XHRobjekt.open("GET", url);
      XHRobjekt.send(null);
    }//if objekt existerar
  }//slut på funktionen hamtaFranServern()
  
  