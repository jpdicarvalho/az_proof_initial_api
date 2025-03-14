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

      // Calcular o Ticket Médio (evitar divisão por zero)
      const average_ticket = sales_count > 0 ? sales_total / sales_count : 0;

      // Paginação (por padrão, limitamos a 100 pedidos por página)
      const limit = 100;
      const page = Number(req.query.page) || 1;
      const total = orders_count;
      const total_pages = Math.ceil(total / limit);
      const has_more = page < total_pages;
      
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Erro ao calcular a dashboard. Tente novamente mais tarde."
      });
    }
  }
}

export default new DashboardsController();