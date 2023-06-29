Js.log("Hello, ReScript")

@module("./somejslib.js")
external iTake5Arguments: ('a, 'b, 'c, 'd, 'e) => unit = "iTake5Arguments"

@module("./somejslib.js")
external iTake5ArgumentsUncurried: ('a, 'b, 'c, 'd, 'e) => unit = "iTake5Arguments"

let print4: ('a, 'b, 'c, 'd) => unit = (a, b, c, d) => Js.log4(a, b, c, d)
let print5Uncurried: ('a, 'b, 'c, 'd) => unit = (a, b, c, d) => Js.log4(a, b, c, d)

let halfCurried = iTake5Arguments(1, 2, 3)
halfCurried(4, 5)

let halfPrint = print4(1, 2)
halfPrint(3, 4)
