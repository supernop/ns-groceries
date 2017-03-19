// var moment = require("moment");
// console.log(moment().format("DD MM YYYY"));
var knockknock = require("knock-knock-jokes");
var moment = require("moment");
var observable = require("data/observable");
var pageData = new observable.Observable();
 
exports.loaded = function(args) {
    args.object.bindingContext = pageData;
};
exports.generateJoke = function() {
    pageData.set("joke", knockknock());
    pageData.set("timestamp", "Generated on " +
        moment().format("LL") +
        " at " +
        moment().format("h:mm:ss a"));
};

    pageData.set("timestamp", "วันเดือนปีปัจจุบัน " +
        moment().format("LL") +
        " เวลาปัจจุบัน " +
        moment().format("h:mm:ss a"));
    pageData.set("date","วันที่"+moment().format("DD MMMM YYYY"));