"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bagel = void 0;

require("core-js/modules/web.dom.iterable");

class Bagel {
  constructor(name, methods, variables = null) {
    this._name = name;
    this._count = {};
    methods.forEach(method => {
      this.stub(method[0], method[1]);

      this._resetCount(method[0]);
    });

    if (variables) {
      variables.forEach(variable => {
        this[variable[0]] = null || variable[1];
      });
    }
  }

  _resetCount(method) {
    this._count[method] = 0;
  }

  _resetAllCount() {
    for (let method in this._count) {
      this._resetCount(method);
    }
  }

  stub(method, output = null) {
    this[method] = () => {
      this._count[method]++;
      return null || output;
    };
  }

}

exports.Bagel = Bagel;