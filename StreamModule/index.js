const fs = require("fs");
const http = require("http");

const server = http.createServer();

//1st way
server.on('request',(req, res)=>{
//         fs.readFile('text.txt', (err, data)=> {
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });
// });
//2nd way

// const rstream = fs.createReadStream("text.txt");
// rstream.on("data", (chunkdata)=>{
//     resizeBy.write(chunkdata);
// });
// rstream.on("end",()=>{
//     resizeBy.end();
// });
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not found");
// });

// 3rd way
const rstream = fs.createReadStream("text.txt");
rstream.pipe(res);

});


server.listen(8000, "127.0.0.1");
