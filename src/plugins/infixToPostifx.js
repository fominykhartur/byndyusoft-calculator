const calcOperator = ["+", "-", "*", "/", "^", "sin", "cos", "sqrt"];

export function infixToPostfix(expression) {
  let postFix = "";
  let operatorStack = [];
  expression = expression.split(" ");
  // console.log(expression);
  for (let i = 0; i < expression.length; i++) {
    let e = expression[i];
    if (parseFloat(e) || e === "0") {
      postFix += e + " ";
    }
    if (e === ")") {
      if (operatorStack.includes("(")) {
        while (operatorStack[operatorStack.length - 1] !== "(") {
          postFix += operatorStack.pop() + " ";
        }
        operatorStack.pop();
      } else {
        throw new Error("Invalid expression");
      }
    } else if (calcOperator.includes(e)) {
      // e === "+" || e === "-" || e === "*" || e === "/" || e === "^") {
      while (
        operatorStack.length !== 0 &&
        operatorStack[operatorStack.length - 1] !== "(" &&
        getPrecedence(e) <=
          getPrecedence(operatorStack[operatorStack.length - 1])
      ) {
        postFix += operatorStack.pop() + " ";
      }
      operatorStack.push(e);
    } else if (e === "(") {
      operatorStack.push(e);
    }
  }

  if (operatorStack.includes("(")) {
    throw new Error("Invalid expression");
  }

  while (operatorStack.length !== 0) {
    postFix += operatorStack.pop() + " ";
  }

  // console.log("postfix", postFix);
  return postFix;
}

function getPrecedence(ch) {
  if (
    ch === "+" ||
    ch === "-" ||
    ch === "sin" ||
    ch === "cos" ||
    ch === "sqrt"
  ) {
    return 1;
  } else if (ch === "*" || ch === "/") {
    return 2;
  } else if (ch === "^") {
    return 3;
  } else {
    return 0;
  }
}
