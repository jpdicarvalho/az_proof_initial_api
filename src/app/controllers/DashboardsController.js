import Order from "../models/Order";

class DashboardsController {
  async index(req, res) {
    try {
      // Pegar o token do cabeçalho da requisição
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({
          error: true,
          message: "Token não fornecido. Faça login novamente.",
        });
      }

      // Buscar os pedidos no banco de dados
      const orders = await Order.find();

      return res.status(200).json({
        success: true,
        message: "Pedidos recuperados com sucesso.",
        data: orders,
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Erro ao buscar os pedidos. Tente novamente mais tarde.",
      });
    }
  }
}

export default new DashboardsController();
