export class Bagel {
  constructor(name, methods) {
    this._name = name;
    methods.forEach((method) => {
      this[method] = () => { console.log(method) };
    })
  }
}
