var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var codeFormatter = require('js-beautify').html;
const fs = require('fs');

function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        callback(xmlHttpReq.responseText);
      }
    }
    xmlHttpReq.open("GET", theUrl, true);
    xmlHttpReq.send(null);
  }
  
  httpGetAsync('https://www.merrimack.edu/campus-life/getting-involved/campus-programming-calendar.php', function(result) {
      var data = codeFormatter(result);
      console.log(data);
      fs.writeFile('~mack.html', data, err => {
        if (err) {
          console.error(err);
          return
        }
      })
  });