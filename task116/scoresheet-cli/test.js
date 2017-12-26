// var	query = require('cli-interact').getYesNo;
// var getchar = require('cli-interact').getChar ;
var readlineSync = require('cli-interact') ;
// var answer = query('Is it true');
var answer2 = readlineSync.question('what is?');
let chose = readlineSync.question("1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：");
