const http=require("http");
const fs=require("fs");

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataobj=JSON.parse(data);
const overviewPage=fs.readFileSync(`${__dirname}/templates/template-overview.html`);


const server=http.createServer((req,res)=>{
if(req.url=="/"||req.url=="/overview"){
  res.writeHead(200,{"content-type":"text/HTML"});
  res.end(overviewPage)
}
if(req.url=="/api"){
  res.writeHead(200,{'content-type':'application/JSON'});
  res.end(data)
}

})

server.listen(8000,"localhost",()=>{
console.log("http://localhost:8000");
})



