import Order from "../models/Order";
import { validatePageQuery } from "../utils/pagination";

class DashboardsController {
  async index(req, res) {
    try {
      // Capturar e validar a página da query usando a função utilitária
      const page = validatePageQuery(req.query.page);

      // Capturar os filtros de período (start_date e end_date)
      const { start_date, end_date } = req.query;

      // Converter as datas para objetos Date válidos (se existirem)
      const startDate = start_date ? new Date(start_date) : null;
      const endDate = end_date ? new Date(end_date) : null;

      // Buscar todos os pedidos no banco
      let orders = await Order.find();

      // Aplicar o filtro por período (se as datas forem válidas)
      if (startDate && endDate) {
        orders = orders.filter(order => {
          const orderDate = new Date(order.createdAt);
          return orderDate >= startDate && orderDate <= endDate;
        });
      }

      // Contar total de pedidos e somar valores
      const orders_count = orders.length;
      const orders_total = orders.reduce((sum, order) => sum + (order.payment.amount || 0), 0);

      // Filtrar apenas vendas aprovadas
      const successfulSales = orders.filter(order => order.payment.status === "succeeded");
      const sales_count = successfulSales.length;
      const sales_total = successfulSales.reduce((sum, sale) => sum + (sale.payment.amount || 0), 0);

      // Calcular o Ticket Médio (evitar divisão por zero)
      const average_ticket = sales_count > 0 ? sales_total / sales_count : 0;

      // Ajustar paginação (exibindo 5 pedidos por página)
      const limit = 5;
      const total = orders_count;
      const total_pages = Math.ceil(total / limit);
      const has_more = page < total_pages;

      // Paginar os pedidos
      const startIndex = (page - 1) * limit;
      const paginatedOrders = orders.slice(startIndex, startIndex + limit);

      // Retornar apenas os dados necessários para o frontend
      const formattedOrders = paginatedOrders.map(order => ({
        id_pedido: order._id,
        id_loja: order.seller.id,
        data_criacao: order.createdAt,
        nome_cliente: order.customer.name,
        cpf_cliente: order.customer.doc,
        status_pedido: order.status,
        status_pagamento: order.payment.status,
        metodo_pagamento: order.payment.method,
        total: order.payment.amount
      }));

      // Retornar os valores calculados no formato correto
      return res.status(200).json({
        orders_total,
        orders_count,
        sales_total,
        sales_count,
        average_ticket,
        orders: formattedOrders,
        has_more,
        limit,
        total_pages,
        page,
        total
      });

    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Erro ao calcular a dashboard. Tente novamente mais tarde."
      });
    }
  }
}

export default new DashboardsController();