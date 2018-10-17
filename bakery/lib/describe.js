"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bag = exports.batch = void 0;

var _colour = require("./colour");

const batch = (title, cb) => {
  console.log(_colour.FgYellow, title, _colour.Reset);
  cb();
};

exports.batch = batch;

const bag = (title, cb) => {
  console.log(_colour.FgBlue, title, _colour.Reset);
  cb();
};

exports.bag = bag;