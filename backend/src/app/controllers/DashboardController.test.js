import request from "supertest";
import app from "../controllers/DashboardController";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

let authToken = "";

beforeAll(async () => {
    const response = await request(app)
      .post("/proof/session")
      .send({
        email: process.env.TEST_USER_EMAIL,
        password: process.env.TEST_USER_PASSWORD,
      });
  
    authToken = response.body.token;
});

describe("Dashboard API", () => {
  test("GET /proof/dashboard deve retornar status 200 e a estrutura correta", async () => {
    const response = await request(app)
      .get("/proof/dashboard")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("orders_total");
    expect(response.body).toHaveProperty("orders_count");
    expect(response.body).toHaveProperty("sales_total");
    expect(response.body).toHaveProperty("sales_count");
    expect(response.body).toHaveProperty("average_ticket");
    expect(response.body).toHaveProperty("orders");
    expect(Array.isArray(response.body.orders)).toBe(true);
  });

  test("GET /proof/dashboard com paginação deve retornar a página correta", async () => {
    const response = await request(app)
      .get("/proof/dashboard?page=2")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.page).toBe(2);
  });

  test("GET /proof/dashboard com filtro de datas", async () => {
    const response = await request(app)
      .get("/proof/dashboard?start_date=2022-03-01&end_date=2022-03-30")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.orders.length).toBeGreaterThanOrEqual(0);
  });

  test("GET /proof/dashboard com datas inválidas deve ignorar o filtro", async () => {
    const response = await request(app)
      .get("/proof/dashboard?start_date=abc&end_date=xyz")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.orders.length).toBeGreaterThanOrEqual(0);
  });
});