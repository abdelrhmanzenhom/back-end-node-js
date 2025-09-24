const express=require("express");
const fs=require("fs");
const app=express();
const PORT=7000;
app.use(express.json())
const tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours.json`));


app.get(`/api/v1/tours`,(req,res)=>{
    res.status(200).json({
        status:200,
        result:tours.length,
        data:{tours:tours}
    });
})
app.post(`/api/v1/tours`,(req,res)=>{
    
    let jsonarr=tours;
console.log(jsonarr)
    fs.writeFile(`${__dirname}/dev-data/data/tours.json`);
    res.json("ww")

})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})