export class Bagel {
  constructor(name, methods) {
    this._name = name;
    this._count = {};

    methods.forEach(method => {
      this[method] = (logCount = true) => {
        if (logCount) {
          this._count[method]++;
        } else {
          return this._count[method];
        }
      };
      this._count[method] = 0;
    });
  }

  _resetCount(method) {
    this._count[method] = 0;
  }
}
