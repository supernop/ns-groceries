var sound = require("nativescript-sound");
var tada = sound.create("~/sounds/man.mp3");
tada.play();
var frameModule = require("ui/frame");
exports.menu = function() {
var topmost = frameModule.topmost();
    console.log("เข้าสู่เมนูหลัก");
    // alert("เข้าสู่เมนูหลัก");
topmost.navigate("views/login/login");
};
