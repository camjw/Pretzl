"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bagel = void 0;

require("core-js/modules/web.dom.iterable");

class Bagel {
  constructor(name, methods) {
    this._name = name;
    this._count = {};
    methods.forEach(method => {
      this[method] = (test = false) => {
        if (test) {
          return this._count[method];
        } else {
          this._count[method]++;
        }
      };

      this._count[method] = 0;
    });
  }

  _resetCount(method) {
    this._count[method] = 0;
  }

}

exports.Bagel = Bagel;