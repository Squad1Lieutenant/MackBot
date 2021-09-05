var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
    xmlHttpReq.send(null);
  }
  httpGetAsync('https://www.merrimack.edu/campus-life/getting-involved/campus-programming-calendar.php', function(result){
      console.log(result);
  });