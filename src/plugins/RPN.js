export function RPNProcess(rpnExpression) {
  let e = rpnExpression.trim().split(" ");
  let i = 0;

  while (e.length !== 1) {
    // console.log(e[i], i);
    if (e[i] === "") {
      e.splice(i, 1);
    } else if (e[i] === "+") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) + parseFloat(e[i - 1]));
      i -= 2;
    } else if (e[i] === "-") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) - parseFloat(e[i - 1]));
      i -= 2;
    } else if (e[i] === "*") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) * parseFloat(e[i - 1]));
      i -= 2;
    } else if (e[i] === "/") {
      e.splice(i - 2, 3, parseFloat(e[i - 2]) / parseFloat(e[i - 1]));
      i -= 2;
    } else if (e[i] === "^") {
      e.splice(i - 2, 3, Math.pow(parseFloat(e[i - 2]), parseFloat(e[i - 1])));
      i -= 2;
    } else if (e[i] === "sin") {
      e.splice(i - 1, 2, Math.sin((parseFloat(e[i - 1]) * Math.PI) / 180));
      i -= 1;
    } else if (e[i] === "cos") {
      e.splice(i - 1, 2, Math.cos((parseFloat(e[i - 1]) * Math.PI) / 180));
      i -= 1;
    } else if (e[i] === "sqrt") {
      e.splice(i - 1, 2, Math.sqrt(parseFloat(e[i - 1])));
      i -= 1;
    } else if (parseFloat(e[i]) || e[i] === "0") {
      i++;
    } else {
      throw new Error("Calculation error");
    }
  }

  if (!e[0]) {
    throw new Error("Calculation error");
  }
  return e[0];
}
