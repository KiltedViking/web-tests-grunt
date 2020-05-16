/* First go at creating an ES2015/ES6 module... not working in todays browsers... */
var Album = function() {
  var album = this;

  album.title = "No title";
  album.artist = "No artist";
};

export default Album;