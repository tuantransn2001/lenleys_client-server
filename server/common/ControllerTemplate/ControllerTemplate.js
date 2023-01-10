class CRUDTemplate {
  constructor(Model) {
    this.currentModel = "DEmo";
  }

  static async readAll(req, res) {
    console.log(currentModel);
  }
}

module.exports = CRUDTemplate;
