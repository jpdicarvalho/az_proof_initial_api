import React from "react";
import './OrdersTable.css';

const OrdersTable = () => {
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
          <tr>
            <td>#123456</td>
            <td>#123456</td>
            <td>01/02/2022</td>
            <td>Tiago Hintz</td>
            <td>007.284.213-56</td>
            <td>Pagamento aprovado</td>
            <td>Aprovado</td>
            <td>Crédito a prazo</td>
            <td>R$ 1.127,16</td>
          </tr>
          <tr>
            <td>#234567</td>
            <td>#234567</td>
            <td>01/02/2022</td>
            <td>Tiago Hintz</td>
            <td>007.284.213-56</td>
            <td>Enviado</td>
            <td>Aprovado</td>
            <td>Crédito à vista</td>
            <td>R$ 415,98</td>
          </tr>
          <tr>
            <td>#345678</td>
            <td>#345678</td>
            <td>31/01/2022</td>
            <td>Patrícia Mesquita</td>
            <td>004.283.146-34</td>
            <td>Enviado</td>
            <td>Aprovado</td>
            <td>Pix</td>
            <td>R$ 809,99</td>
          </tr>
          <tr>
            <td>#456789</td>
            <td>#456789</td>
            <td>31/01/2022</td>
            <td>Patrícia Mesquita</td>
            <td>004.283.146-34</td>
            <td>Criado</td>
            <td>Pendente</td>
            <td>Pix</td>
            <td>R$ 809,99</td>
          </tr>
          <tr>
            <td>#567891</td>
            <td>#567891</td>
            <td>30/01/2022</td>
            <td>Mateus Taufer</td>
            <td>856.356.892-47</td>
            <td>Pagamento aprovado</td>
            <td>Aprovado</td>
            <td>Boleto</td>
            <td>R$ 607,95</td>
          </tr>
        </tbody>
      </table>
  );
};

export default OrdersTable;
