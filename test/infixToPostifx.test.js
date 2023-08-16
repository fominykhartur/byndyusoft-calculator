import { infixToPostfix } from "../src/plugins/infixToPostifx";

describe("Тестирование функции конвертации infix в postfix", () => {
  describe("Проверка правильности преобразования различных примеров", () => {
    test("1 + 2 должно быть 1 2 + ", () => {
      expect(infixToPostfix("1 + 2")).toBe("1 2 + ");
    });
    test("( 23573 - 8999 ) / 21 * 7 / ( 338 + 9 ) * 29 должно быть 23573 8999 - 21 / 7 * 338 9 + / 29 * ", () => {
      expect(
        infixToPostfix("( 23573 - 8999 ) / 21 * 7 / ( 338 + 9 ) * 29")
      ).toBe("23573 8999 - 21 / 7 * 338 9 + / 29 * ");
    });
    test("112 * 49 - ( 1478 + 2411 ) - 322 должно быть 112 49 * 1478 2411 + - 322 - ", () => {
      expect(infixToPostfix("112 * 49 - ( 1478 + 2411 ) - 322")).toBe(
        "112 49 * 1478 2411 + - 322 - "
      );
    });
    test("714 / 7 + ( 9756 - 4197 ) / 3 должно быть 714 7 / 9756 4197 - 3 / + ", () => {
      expect(infixToPostfix("714 / 7 + ( 9756 - 4197 ) / 3")).toBe(
        "714 7 / 9756 4197 - 3 / + "
      );
    });
    test("( 1561 + 2810 ) - ( 2004 + 2330 / 5 ) должно быть 1561 2810 + 2004 2330 5 / + -  ", () => {
      expect(infixToPostfix("( 1561 + 2810 ) - ( 2004 + 2330 / 5 )")).toBe(
        "1561 2810 + 2004 2330 5 / + - "
      );
    });
    test("( 2340 / 5 + 932 ) / 50 должно быть 2340 5 / 932 + 50 / ", () => {
      expect(infixToPostfix("( 2340 / 5 + 932 ) / 50")).toBe(
        "2340 5 / 932 + 50 / "
      );
    });
    test("81 * 13 + ( 6043 - 5711 ) / 2 должно быть 81 * 13 + ( 6043 - 5711 ) / 2 ", () => {
      expect(infixToPostfix("81 * 13 + ( 6043 - 5711 ) / 2")).toBe(
        "81 13 * 6043 5711 - 2 / + "
      );
    });
    test("( 744 + 256 ) / 50 + 724  должно быть 744 256 + 50 / 724 + ", () => {
      expect(infixToPostfix("( 744 + 256 ) / 50 + 724 ")).toBe(
        "744 256 + 50 / 724 + "
      );
    });
    test("При вводе одного числа 0 в выводе должно остаться оно само", () => {
      expect(infixToPostfix("0 ")).toBe("0 ");
    });
    test("При вводе одного числа 1 в выводе должно остаться оно само", () => {
      expect(infixToPostfix("1 ")).toBe("1 ");
    });
  });
  describe("Проверка корректности обработки ошибок", () => {
    test("( 744 + 256  / 50 + 724  должно выкинуть ошибку Invalid expression", () => {
      expect(() => infixToPostfix("( 744 + 256  / 50 + 724 ")).toThrow(
        "Invalid expression"
      );
    });
    test(" 744 + 256)  / 50 + 724  должно выкинуть ошибку Invalid expression", () => {
      expect(() => infixToPostfix("( 744 + 256  / 50 + 724 ")).toThrow(
        "Invalid expression"
      );
    });
    test(") ) ) ) ) должно выкинуть ошибку Invalid expression", () => {
      expect(() => infixToPostfix(") ) ) ) )")).toThrow("Invalid expression");
    });
    test("( ( ( ( (  должно выкинуть ошибку Invalid expression", () => {
      expect(() => infixToPostfix("( ( ( ( (")).toThrow("Invalid expression");
    });
  });
});
