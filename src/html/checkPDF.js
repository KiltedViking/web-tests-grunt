/**
 * Returns true if the HTML5 File API is supported by the browser
 * @returns {*}
 */
function supportsFileAPI() {
  return window.File && window.FileReader && window.FileList && window.Blob;
}

/**
 * Used to attach events to an element or object in a browser independent way
 * @param element
 * @param event
 * @param callbackFunction
 */
function attachEvent(element, event, callbackFunction) {
  if(element.addEventListener) {
    element.addEventListener(event, callbackFunction, false);
  }
  else if(element.attachEvent)  {
    element.attachEvent("on" + event, callbackFunction);
  }
}
 
function preUpload(event) {
 
  // The file API supports the ability to reference multiple files in one &lt;input&gt; tag
  var file = event.target.files[0];
  var reader = new FileReader();
  // Uses two anonymous functions so we can pass the File object to the on load anonymous function.
  attachEvent(reader, "load", (function(fileToCheck) {
    return function (evt) {
      var data = evt.target.result.substr(0, 8); // This gets the first 8 bytes/characters of the file
      var regex = new RegExp("%PDF-1.[0-7]"); // This Regular Expression is used to check if the file is valid
      if(data.match(regex)) {
        alert(fileToCheck.name + " is a valid PDF File.");
      }
    };
  })(file));

  var MBSize = file.size / 1024 / 1024;
  if(MBSize > 10) {
    if(!confirm(file.name + " is " + MBSize + "MB big, and may cause your browser to stop responding while it parses it.\nContinue?")) {
      return;
    }
  }
  reader.readAsText(file); // For now we shall read the file as if it were a text file
}

function pageLoaded() {
  var fileInput = document.getElementById("fileUpload");
  if(supportsFileAPI()) {
    attachEvent(fileInput, "change", preUpload);
  }
  else {
    alert("Your browser does not support the HTML5 File API.");
  }
}
 
attachEvent(window, "load", pageLoaded);

