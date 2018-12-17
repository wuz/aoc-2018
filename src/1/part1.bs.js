// Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function readFile(path) {
  try {
    return Fs.readFileSync(path, "utf8");
  }
  catch (raw_e){
    var e = Caml_js_exceptions.internalToOCamlException(raw_e);
    console.log(e);
    return undefined;
  }
}

var fileContents = readFile("./numbers.txt");

exports.readFile = readFile;
exports.fileContents = fileContents;
/* fileContents Not a pure module */
