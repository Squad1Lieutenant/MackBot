const webGrabber = require("./web-grabber");
const fs = require('fs');
const jsdom = require("jsdom");
const jquery = require('jquery')
const { JSDOM } = jsdom;


webGrabber.writeToFile();

fs.readFile('mack.html', {encoding: "utf8"}, function (err, markup) {
    if (err) throw err;
    const dom = new JSDOM(markup);
    const $ = jquery(dom.window);
    const data = $("div.lw_today").html();
    console.log(data);
});