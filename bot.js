const webGrabber = require("./web-grabber");
const fs = require('fs');
const jsdom = require("jsdom");
const jquery = require('jquery');
const { error } = require("console");
const { JSDOM } = jsdom;


webGrabber.writeToFile();

try {
    const fileHtml = fs.readFileSync('mack.html');
    var file = fileHtml;
} catch(err){
    console.log(err)
    return
}
const dom = new JSDOM(file);
const $ = jquery(dom.window);
const data = $("div.lw_today").html();
console.log(data);