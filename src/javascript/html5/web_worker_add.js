onmessage = function(e) {
  console.log(e.data);
  var x = e.data.x;
  var y = e.data.y;
  var sum = x + y;

  postMessage(sum);
};