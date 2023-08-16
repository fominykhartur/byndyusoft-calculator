<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-text-field
        v-model="exp"
        readonly
        clearable
        @click:clear="clear"
        variant="outlined"
      ></v-text-field>
      <v-row justify="center">
        <template v-for="element of calcElements">
          <v-col cols="12" sm="3" md="3">
            <v-btn
              block
              rounded="0"
              size="x-large"
              @click="addToExp(element)"
              >{{ element }}</v-btn
            >
          </v-col>
        </template>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-btn block rounded="0" size="x-large" @click="remove">←</v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-btn block rounded="0" size="x-large" @click="calc">=</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import { RPNProcess } from "@/plugins/RPN.js";
import { infixToPostfix } from "@/plugins/infixToPostifx.js";

export default {
  data() {
    return {
      calcElements: [
        "(",
        ")",
        "+",
        "-",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "/",
        "1",
        "2",
        "3",
        "^",
        ".",
        "0",
      ],
      expStack: [],
      exp: "",
    };
  },
  methods: {
    addToExp(s) {
      if (
        !isNaN(parseFloat(this.expStack[this.expStack.length - 1])) &&
        !isNaN(parseFloat(s))
      ) {
        this.expStack[this.expStack.length - 1] =
          this.expStack[this.expStack.length - 1] + s;
      } else {
        this.expStack.push(s);
      }
      this.exp = this.expStack.join(" ");
    },
    calc() {
      try {
        this.exp = this.exp.replaceAll(" . ", ".");
        console.log(this.exp);
        const postfix = infixToPostfix(this.exp);
        this.exp = RPNProcess(postfix);
        this.expStack = [];
      } catch (e) {
        console.error(e);
        alert("Ошибка в выражение");
      }
    },
    clear() {
      this.expStack = [];
      this.exp = "";
    },
    remove() {
      this.expStack.pop();
      this.exp = this.expStack.join(" ");
    },
  },
};
</script>
