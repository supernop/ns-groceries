let page

// var dialogs = require("ui/dialogs");
// dialogs.alert({
//     title: "Your title",
//     message: "Your message",
//     okButtonText: "Your button text"
// }).then(function () {
//     console.log("Dialog closed!");
// });



var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var context = new observableModule.fromObject({
    list: new ObservableArray([
        { name: 'นายนพดล มาจาก วช.เพชรบูรณ์', qty: 1 },
        { name: 'นางมาลี แผงดี วท.เพชรบูรณ์' , qty: 2 },
        { name: 'นางสาวดาวพระศุกร์ ฤทธิ์บัณฑิตย์ วอศ.สระบุรี', qty: 3 },
        { name: 'นายสุทธินันท์ ดีวัน วท.เพชรบูรณ์', qty: 4 },
    ])
})

// let context = {
//     list: [
//         {name: 'Book',qty: 2},
//         {name: 'Notebook',qty: 1},
//         ],
// }

exports.pageLoad = (args) => {
    page = args.object
    page.bindingContext = context
}