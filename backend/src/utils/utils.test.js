import Utils from "../utils/utils";

describe("Utils Class", () => {
  test("validatePageQuery() deve retornar um número válido", () => {
    expect(Utils.validatePageQuery("3")).toBe(3);
    expect(Utils.validatePageQuery("-1")).toBe(1); // Não pode ser menor que 1
    expect(Utils.validatePageQuery("abc")).toBe(1); // String inválida
    expect(Utils.validatePageQuery(undefined)).toBe(1); // Sem valor
  });

  test("validateDateRange() deve converter datas corretamente", () => {
    const validRange = Utils.validateDateRange("2022-03-01", "2022-03-30");
    expect(validRange.startDate).toBeInstanceOf(Date);
    expect(validRange.endDate).toBeInstanceOf(Date);

    const invalidRange = Utils.validateDateRange("abc", "xyz");
    expect(invalidRange.startDate).toBeNull();
    expect(invalidRange.endDate).toBeNull();
  });
});