
module.exports = class Request {
  constructor(prom) {
    this.prom = prom;
  }

  promise() {
    return this.prom;
  }
};
