import { RPNProcess } from "../src/plugins/RPN";

describe("Тестирование функции вычисления выражения в ОПН", () => {
  describe("Проверка корректности вычислений", () => {
    test("1 2 + должно быть 3", () => {
      expect(RPNProcess("1 2 +")).toBe(3);
    });
    test("23573 8999 - 21 / 7 * 338 9 + / 29 * должно быть 406", () => {
      expect(RPNProcess("23573 8999 - 21 / 7 * 338 9 + / 29 *")).toBe(406);
    });
    test("112 49 * 1478 2411 + - 322 - должно быть 1277", () => {
      expect(RPNProcess("112 49 * 1478 2411 + - 322 - ")).toBe(1277);
    });
    test("714 7 / 9756 4197 - 3 / + должно быть 1955", () => {
      expect(RPNProcess("714 7 / 9756 4197 - 3 / +")).toBe(1955);
    });
    test("1561 2810 + 2004 2330 5 / + - должно быть 1901", () => {
      expect(RPNProcess("1561 2810 + 2004 2330 5 / + - ")).toBe(1901);
    });
    test("2340 5 / 932 + 50 / должно быть 28", () => {
      expect(RPNProcess("2340 5 / 932 + 50 /")).toBe(28);
    });
    test("81 13 * 6043 5711 - 2 / + должно быть 1219", () => {
      expect(RPNProcess("81 13 * 6043 5711 - 2 / + ")).toBe(1219);
    });
    test("744 256 + 50 / 724 + должно быть 744", () => {
      expect(RPNProcess("744 256 + 50 / 724 + ")).toBe(744);
    });
  });
  describe("Проверка обработки ошибок", () => {
    test("744 256 + 50 / 724 + + должно выкинуть ошибку Calculation error", () => {
      expect(() => RPNProcess("744 256 + 50 / 724 + +")).toThrow(
        "Calculation error"
      );
    });
    test("744 256 должно выкинуть ошибку Calculation error", () => {
      expect(() => RPNProcess("744 256")).toThrow("Calculation error");
    });
    test("Пустое выражение должно выкинуть ошибку Calculation error", () => {
      expect(() => RPNProcess("")).toThrow("Calculation error");
    });
    test("* должна выкинуть Calculation error", () => {
      expect(() => RPNProcess("*")).toThrow("Calculation error");
    });
  });
});
