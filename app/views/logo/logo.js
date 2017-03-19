var sound = require("nativescript-sound");
// var tada = sound.create("~/sounds/man.mid");
// tada.play();



console.log("test");
var frameModule = require("ui/frame");
exports.menu = function() {
var topmost = frameModule.topmost();
    console.log("เข้าสู่เมนูหลัก");
    // alert("เข้าสู่เมนูหลัก");
    // tada.stop();
topmost.navigate("views/login/login");
};
