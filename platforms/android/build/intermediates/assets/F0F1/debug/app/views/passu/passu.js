const Observable = require("data/observable").Observable;
const fetch = require('fetch')
let page;
var frameModule = require("ui/frame");
exports.time1 = function() {
    var topmost = frameModule.topmost();
    console.log("เรื่องเวลา");
    // alert("เวลา");
    topmost.navigate("views/time/time");
};

var frameModule = require("ui/frame");
exports.photo = function() {
    var topmost = frameModule.topmost();
    console.log("ใช้งานกล้อง");
    // alert("ถ่ายรูป");
    topmost.navigate("views/profile/profile");
};