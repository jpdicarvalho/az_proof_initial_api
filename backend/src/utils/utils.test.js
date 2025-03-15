import Utils from "../utils/utils";

/**
 * Testes unitários para a classe Utils
 * - Verifica se os métodos utilitários funcionam corretamente.
 */
describe("Utils Class", () => {

  /**
  * Teste 1: validatePageQuery()
  * - Deve retornar um número válido baseado na entrada.
  * - Se a entrada for um número positivo, retorna o mesmo número.
  * - Se for um número negativo ou string inválida, deve retornar 1.
  */
  test("validatePageQuery() deve retornar um número válido", () => {
    expect(Utils.validatePageQuery("3")).toBe(3); // Entrada válida
    expect(Utils.validatePageQuery("-1")).toBe(1); // Não pode ser menor que 1
    expect(Utils.validatePageQuery("abc")).toBe(1); // String inválida
    expect(Utils.validatePageQuery(undefined)).toBe(1); // Sem valor, assume 1 por padrão
  });

  /**
  * Teste 2: validateDateRange()
  * - Deve converter strings de datas em objetos Date.
  * - Se as datas forem válidas, retorna um intervalo de datas.
  * - Se as datas forem inválidas, retorna null.
  */
  test("validateDateRange() deve converter datas corretamente", () => {
    const validRange = Utils.validateDateRange("2022-03-01", "2022-03-30");
    expect(validRange.startDate).toBeInstanceOf(Date); // Deve ser um objeto Date, representando a data inicial
    expect(validRange.endDate).toBeInstanceOf(Date); // Deve ser um objeto Date, representando a data final

    const invalidRange = Utils.validateDateRange("abc", "xyz");
    expect(invalidRange.startDate).toBeNull(); // Se inválido, retorna null
    expect(invalidRange.endDate).toBeNull(); // Se inválido, retorna null
  });
});