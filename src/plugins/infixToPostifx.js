export function infixToPostfix(expression) {
  let postFix = "";
  let operatorStack = [];
  expression = expression.split(" ");
  for (let i = 0; i < expression.length; i++) {
    let e = expression[i];
    if (parseFloat(e)) {
      postFix += e + " ";
    }
    if (e === ")") {
      while (operatorStack[operatorStack.length - 1] !== "(") {
        postFix += operatorStack.pop() + " ";
      }
      operatorStack.pop();
    } else if (e === "+" || e === "-" || e === "*" || e === "/" || e === "^") {
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

  while (operatorStack.length !== 0) {
    postFix += operatorStack.pop() + " ";
  }

  return postFix;
}

function getPrecedence(ch) {
  if (ch == "+" || ch == "-") {
    return 1;
  } else if (ch == "*" || ch == "/") {
    return 2;
  } else if (ch === "^") {
    return 3;
  } else {
    return 0;
  }
}
