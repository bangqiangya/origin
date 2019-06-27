let path = require("path");
__dirname; //绝对路径
console.log(__dirname);
let r = path.resolve(__dirname,"app.js");
let r1 = path.join(__dirname,"app.js");
console.log(r);