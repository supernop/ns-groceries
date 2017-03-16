exports.signIn = function() {
    alert("Signing in");
};
exports.register = function() {
    alert("Registering");
};
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
exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
// var fm = require("ui/frame");
// exports.list = function() {
//     var topmost = fm.topmost();
//     topmost.navigate("views/list/list");
// };
exports.checkLogin = function(){
    console.log('ok')
    // var email = page.getViewById('email');
    // email.text='Hello';
    // console.log(login.email);
    console.log("ok test")
    fetch('192.168.8.179:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify()({
      email: login.email,
      pass: login.pass,
  })
}).then((res)=>{
        console.log('ok')
        return res.json()
}).then((data) => {
    console.log('ok')
    console.dump(data)
}).catch((err)=>{
        console.log('error')
    })
    console.log('test')
}

exports.cl = function(){
    var email = page.getViewById('email');
    email.text='';
    var pass = page.getViewById('pass');
    pass.text='';
}
//var page
