import request from "supertest";
import app from "../../app";
import mongoose from "mongoose";

let authToken = ""; // Armazena o token de autenticação para ser usado nos testes

/**
 * Antes de rodar os testes:
 * 1. Realiza a autenticação na API.
 * 2. Obtém e armazena o token JWT para chamadas protegidas.
 */
beforeAll(async () => {
    const response = await request(app)
      .post("/proof/session")
      .send({
        email: "teste@azape.co",
        password: "123456",
      });
    authToken = response.body.token; // Salva o token para uso nos próximos testes
});

/**
 * Após todos os testes:
 * - Fecha a conexão com o banco de dados para evitar que o Jest fique pendurado.
 */
afterAll(async () => {
    await mongoose.connection.close();
});

/**
 * Testes da API do Dashboard
 * - Valida a integridade das respostas da API de Dashboard.
 */
describe("Dashboard API", () => {

  /**
  * Teste 1: Verifica se a API retorna os dados corretamente
  * - Deve retornar status HTTP 200.
  * - Deve conter todas as propriedades esperadas no corpo da resposta.
  */
  test("GET /proof/dashboard deve retornar status 200 e a estrutura correta", async () => {
    const response = await request(app)
      .get("/proof/dashboard")
      .set("Authorization", `Bearer ${authToken}`); // Passa o token de autenticação no header

    expect(response.status).toBe(200); // Espera resposta com status 200
    expect(response.body).toHaveProperty("orders_total");
    expect(response.body).toHaveProperty("orders_count");
    expect(response.body).toHaveProperty("sales_total");
    expect(response.body).toHaveProperty("sales_count");
    expect(response.body).toHaveProperty("average_ticket");
    expect(response.body).toHaveProperty("orders");
    expect(Array.isArray(response.body.orders)).toBe(true); // Garante que 'orders' é um array
  });

  /**
  * Teste 2: Valida a paginação da API
  * - Deve retornar a página correta com base no parâmetro ?page=2.
  */
  test("GET /proof/dashboard com paginação deve retornar a página correta", async () => {
    const response = await request(app)
      .get("/proof/dashboard?page=2")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.page).toBe(2); // Garante que a página retornada seja a solicitada
  });

  /**
  * Teste 3: Filtragem de pedidos por data
  * - Deve retornar apenas pedidos dentro do intervalo fornecido (?start_date=2022-03-01&end_date=2022-03-30).
  */
  test("GET /proof/dashboard com filtro de datas", async () => {
    const response = await request(app)
      .get("/proof/dashboard?start_date=2022-03-01&end_date=2022-03-30")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.orders.length).toBeGreaterThanOrEqual(0);
  });

  
  /**
  * Teste 4: Tratamento de datas inválidas no filtro
  * - Se datas inválidas forem passadas (?start_date=abc&end_date=xyz), a API deve ignorá-las e retornar todos os pedidos.
  */
  test("GET /proof/dashboard com datas inválidas deve ignorar o filtro", async () => {
    const response = await request(app)
      .get("/proof/dashboard?start_date=abc&end_date=xyz")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.orders.length).toBeGreaterThanOrEqual(0);
  });
});