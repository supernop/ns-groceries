// const dialogs = require("ui/dialogs");

// const Observable = require("data/observable").Observable;
// const fetch = require('fetch')
// let page;
// let login = new Observable({
//     email: '',
//     pass: '',
//     remember: true,
// });
// exports.loaded = function(args) {
//   page = args.object;
//   console.log("init");
// };

// exports.loaded = function(args) {
//     page = args.object;
//     page.bindingContext = login;
// };

var frameModule = require("ui/frame");
exports.exi = function() {
var dialogs = require("ui/dialogs");
dialogs.confirm({
    title: "Exit Application",
    message: "คุณแน่ใจ",
    okButtonText: "แน่ใจ",
    cancelButtonText: "ยกเลิก",
}).then(function (r) {
        console.log(r);
        if (r) {
         android.os.Process.killProcess(android.os.Process.myPid());
         console.log('กด แน่ใจ"!');
        }else {
            console.log("กดยกเลิก");
        }
});   
};

// var frameModule = require("ui/frame");
// exports.time1 = function() {
//     var topmost = frameModule.topmost();
//     console.log("เรื่องเวลา");
//     // alert("เวลา");
//     topmost.navigate("views/time/time");
// };

// var frameModule = require("ui/frame");
// exports.photo = function() {
//     var topmost = frameModule.topmost();
//     console.log("ใช้งานกล้อง");
//     // alert("ถ่ายรูป");
//     topmost.navigate("views/profile/profile");
// };

var frameModule = require("ui/frame");
exports.register = function() {
    var topmost = frameModule.topmost();
    console.log("หน้าลงทะเบียน");
    // alert("เข้าสู่การลงทะเบียน");
    topmost.navigate("views/register/register");
};

var frameModule = require("ui/frame");
exports.list = function() {
    var topmost = frameModule.topmost();
    console.log("หน้ารายชื่อ");
    // alert("เข้าสู่รายชื่อผู้ทำ");
    topmost.navigate("views/list/list");
};

var frameModule = require("ui/frame");
exports.checkLogin = function(){
    var topmost = frameModule.topmost();
    console.log('เข้าระบบ')
    // alert("เข้าสู่ระบบ");
        topmost.navigate("views/passu/passu");
};

// exports.cl = function(){
//     var email = page.getViewById('email');
//     var pass = page.getViewById('pass');
//     console.log('ยกเลิก')
//     alert("ยกเลิก");
//     email.text='';
//     pass.text='';
// }
//var page
