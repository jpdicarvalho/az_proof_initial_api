import Order from "../models/Order";

class DashboardsController {
  async index(req, res) {
    try {
      // Buscar todos os pedidos no banco
      const orders = await Order.find();

      // Contar total de pedidos e somar valores
      const orders_count = orders.length;

    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Erro ao calcular a dashboard. Tente novamente mais tarde."
      });
    }
  }
}

export default new DashboardsController();