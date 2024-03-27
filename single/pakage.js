const fs = require('fs');

const sourceFilePath = 'index.html';
const sourceCssFilePath = 'output.css';
const targetFilePath = './single/index.html';


// 读取源文件的内容
let sourceContent = fs.readFileSync(sourceFilePath, 'utf8');
let sourceCssContent = fs.readFileSync(sourceCssFilePath, 'utf8');

sourceContent = sourceContent.replace('<link href="./output.css" rel="stylesheet">', `<style>${sourceCssContent}</style>`);  
// 创建文件 targetFilePath 写入内容
fs.writeFileSync(targetFilePath, sourceContent);