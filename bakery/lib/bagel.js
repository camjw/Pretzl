"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bagel = void 0;

require("core-js/modules/web.dom.iterable");

class Bagel {
  constructor(name, methods) {
    this._name = name;
    methods.forEach(method => {
      this[method] = () => {
        console.log(method);
      };
    });
  }

}

exports.Bagel = Bagel;