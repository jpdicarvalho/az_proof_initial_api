import Order from "../models/Order";

class DashboardsController {
  async index(req, res) {
    try {
      // Buscar todos os pedidos no banco
      const orders = await Order.find();

      // Contar total de pedidos e somar valores
      const orders_count = orders.length;
      const orders_total = orders.reduce((sum, order) => sum + (order.payment.amount || 0), 0);

      // Filtrar apenas vendas aprovadas
      const successfulSales = orders.filter(order => order.payment.status === "succeeded");
      const sales_count = successfulSales.length;
      const sales_total = successfulSales.reduce((sum, sale) => sum + (sale.payment.amount || 0), 0);


    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Erro ao calcular a dashboard. Tente novamente mais tarde."
      });
    }
  }
}

export default new DashboardsController();