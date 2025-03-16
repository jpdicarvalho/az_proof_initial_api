import React from "react";
import './OrdersTable.css';

// Função para formatar número como moeda brasileira (BRL)
const formatCurrencyBRL = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const OrdersTable = ({ orders }) => {

  return (
      <table>
        <thead>
          <tr>
            <th className="text__th" style={{background: '#FE877A', borderTopLeftRadius: '8px'}}>
                <p>ID do </p>
                <p>Pedido</p>
            </th>
            <th className="text__th" style={{background: '#FE7C6E'}}>
                <p>ID da </p>
                <p>Loja</p>
            </th>
            <th className="text__th" style={{background: '#FE877A'}}>Criação</th>
            <th className="text__th" style={{background: '#FE7C6E'}}>Nome do cliente</th>
            <th className="text__th" style={{background: '#FE877A'}}>
                <p>CPF/CNPJ</p>
                <p>do cliente</p>
            </th>
            <th className="text__th" style={{background: '#FE7C6E'}}>Status do pedido</th>
            <th className="text__th" style={{background: '#FE877A'}}>
                <p>Status do</p>
                <p>pagamento</p>

            </th>
            <th className="text__th" style={{background: '#FE7C6E'}}>
                <p>Método de</p>
                <p>pagamento</p>

            </th>
            <th className="text__th" style={{background: '#FE877A', borderTopRightRadius: '8px'}}>Total</th>
          </tr>
        </thead>
        <tbody>
        {orders.length > 0 ? (
          orders.map((order) => (
            <tr key={order.id_pedido}>
              <td>#{order.id_pedido}</td>
              <td>#{order.id_loja}</td>
              <td>{new Date(order.data_criacao).toLocaleDateString("pt-BR")}</td>
              <td>{order.nome_cliente}</td>
              <td>{order.cpf_cliente}</td>
              <td>{order.status_pedido}</td>
              <td>{order.status_pagamento}</td>
              <td>{order.metodo_pagamento}</td>
              <td>{formatCurrencyBRL(order.total)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" style={{ textAlign: "center", padding: "10px" }}>
              Nenhum pedido encontrado.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrdersTable;
