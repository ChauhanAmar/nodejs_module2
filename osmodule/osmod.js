// os Module
const os = require("os");

// console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// free memory
const freeMemory= os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

//total memory
const totalMemory= os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);
