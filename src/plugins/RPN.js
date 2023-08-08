export function RPNProcess(rpnExpression) {
  let e = rpnExpression.split(" ");
  let i = 0;

  while (e.length !== 1) {
    // console.log(e);
    if (e[i] === "") {
      e.splice(i, 1);
    }
    if (e[i] === "+") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) + parseFloat(e[i - 1]));
      i -= 2;
    }
    if (e[i] === "-") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) - parseFloat(e[i - 1]));
      i -= 2;
    }
    if (e[i] === "*") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) * parseFloat(e[i - 1]));
      i -= 2;
    }
    if (e[i] === "/") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) / parseFloat(e[i - 1]));
      i -= 2;
    }
    if (e[i] === "^") {
      e.splice(i - 2, 3, Math.pow(parseFloat(e[i - 2]), parseFloat(e[i - 1])));
      i -= 2;
    }
    if (parseFloat(e[i])) {
      i++;
    }
  }

  return e[0];
}

// console.log(RPN('1 2 4 2 / 2 3 ^ ^ * + 1 -'));
