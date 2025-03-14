import Order from "../models/Order";

class DashboardsController {
  async index(req, res) {
    try {
      // Buscar todos os pedidos no banco
      const orders = await Order.find();

      
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Erro ao calcular a dashboard. Tente novamente mais tarde."
      });
    }
  }
}

export default new DashboardsController();