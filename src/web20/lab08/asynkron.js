    function hamtaFranServern(url, handelsehanterare) 
	{
      var XHRobjekt = null;
      try {
	        XHRobjekt = new XMLHttpRequest();  // Firefox, Opera, ... 
          }
          catch(err1) {
      try {
        XHRobjekt = new ActiveXObject("Microsoft.XMLHTTP");  // N�gra IE ver
      }
      catch(err2) {
        try {
          XHRobjekt = new ActiveXObject("Msxml2.XMLHTTP");  // N�gra IE ver
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
          delete XHRobjekt;  //st�dar upp
          XHRobjekt = null;  //referensen pekar nu p� null
        }//if
      }//slut p� den anonym funktion som k�rs n�r tillst�ndet i XHR �ndras
      XHRobjekt.open("GET", url);
      XHRobjekt.send(null);
    }//if objekt existerar
  }//slut p� funktionen hamtaFranServern()
  
  