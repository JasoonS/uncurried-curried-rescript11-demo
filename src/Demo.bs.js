// Generated by ReScript, PLEASE EDIT WITH CARE

import * as SomejslibJs from "./somejslib.js";

console.log("Hello, ReScript");

function iTake5Arguments(prim0, prim1, prim2, prim3, prim4) {
  SomejslibJs.iTake5Arguments(prim0, prim1, prim2, prim3, prim4);
}

var iTake5ArgumentsUncurried = SomejslibJs.iTake5Arguments;

function print4(a, b, c, d) {
  console.log(a, b, c, d);
}

function print5Uncurried(a, b, c, d) {
  console.log(a, b, c, d);
}

function halfCurried(param, param$1) {
  return iTake5Arguments(1, 2, 3, param, param$1);
}

halfCurried(4, 5);

function halfPrint(param, param$1) {
  return print4(1, 2, param, param$1);
}

halfPrint(3, 4);

export {
  iTake5Arguments ,
  iTake5ArgumentsUncurried ,
  print4 ,
  print5Uncurried ,
  halfCurried ,
  halfPrint ,
}
/*  Not a pure module */
