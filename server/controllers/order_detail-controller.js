const { Order_detail } = require("../models");

class OrderDetailController {
  static async getOderDetailList(req, res) {
    try {
      const order_detail_list = await Order_detail.findAll();
      res.status(200).send(order_detail_list);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async createNewOderDetail(req, res) {
    try {
      const { user_id, product_id, unit_price, quantity, discount } = req.body;

      const foundOderDetail = await Order_detail.findOne({
        where: {},
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = OrderDetailController;
