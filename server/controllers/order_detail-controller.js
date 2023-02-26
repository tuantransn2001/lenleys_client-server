const { Order_detail, Promo } = require("../models");
class OrderDetailController {
  static async getOderDetailList(req, res) {
    try {
      const order_detail_list = await Order_detail.findAll();
      res.status(200).send(order_detail_list);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async validateUserPromo(req, res) {
    try {
      const { promo } = req.params;

      const foundPromo = await Promo.findOne({
        where: {
          promo_code: promo,
        },
      });

      if (foundPromo) {
        res.status(200).send(foundPromo);
      } else {
        res
          .status(404)
          .send(
            "Your Promo is invalid or out date please check it and try it again"
          );
      }
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
