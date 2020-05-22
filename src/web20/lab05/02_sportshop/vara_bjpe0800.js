/*******************************************************************************
* Purpose:		Class Vara (Product) - part of assignment on the course Web 2.0
*				with AJAX at miun.se.
* Created by:	Björn G.D. Persson (bjpe0800)
* Created:		2012-02-19
*******************************************************************************/
//Constructor - if json string supplied, create object from string
function Vara(json) {
	if(json == "" || json == undefined) {
		this.varunummer = null;
		this.namn = null;
		this.beskrivning = null;
		this.pris = null;
		this.enhetspris = null;
		this.lagerstatus = null;
		this.sommarvara = null;
		this.vintervara = null;
		this.kategorier = new Array();
	}
	else {
		var jsonObj = eval("(" + json + ")");
		this.varunummer = jsonObj.varunummer;
		this.namn = jsonObj.namn;
		this.beskrivning = jsonObj.beskrivning;
		this.pris = jsonObj.pris;
		this.enhetspris = jsonObj.enhetspris;
		this.lagerstatus = jsonObj.lagerstatus;
		this.sommarvara = jsonObj.sommarvara;
		this.vintervara = jsonObj.vintervara;
		this.kategorier = jsonObj.kategorier;
	}
} //Vara()

//Adding to an array should never be left up to user of class
Vara.prototype.setKategori = function(kat) {
	this.kategorier.push(kat);
}

//Set period of usage
Vara.prototype.setVarutyp = function(per) {
	if(per == "s" || per.toLowerCase() == "sommarvara")
		this.sommarvara = true;
	if(per == "v" || per.toLowerCase() == "vintervara")
		this.vintervara = true;
}

//Get a table row (tr + td tags) for printing
Vara.prototype.getTableRow = function() {
	var str = "<tr><td>" + this.varunummer
		+ "</td><td>" + this.namn
		+ "</td><td>" + this.beskrivning
		+ "</td><td>" + this.pris
		+ "</td><td>" + this.enhetspris
		+ "</td><td>" + this.lagerstatus;
		
	if(this.sommarvara && this.vintervara)
		str += "</td><td>Sommar- o vintervara</td><td>";
	else if(this.sommarvara)
		str += "</td><td>Sommarvara</td><td>";
	else if(this.vintervara)
		str += "</td><td>Vintervara</td><td>";
	else
		str += "</td><td>&nbsp;</td><td>";
		
	for(var i = 0; i < this.kategorier.length; i++) {
		str += this.kategorier[i] + " ";
	}
	
	str += "</td></tr>";
	
	return str;
}