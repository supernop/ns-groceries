const Observable = require("data/observable").Observable;
const fetch = require('fetch')
let page;

let login = new Observable({
    email: '',
    pass: '',
    remember: true,
});
exports.loaded = function(args) {
  page = args.object;
  console.log("init");
};

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = login;
};

var frameModule = require("ui/frame");
exports.CLogin = function(){
    var topmost = frameModule.topmost();
    console.log('เข้าระบบ')
    alert("เข้าสู่ระบบ");
        topmost.navigate("views/system/system");
};

exports.cl = function(){
    var email = page.getViewById('email');
    var pass = page.getViewById('pass');
    console.log('ยกเลิก')
    alert("ยกเลิก");
    email.text='';
    pass.text='';
}