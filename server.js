const express=require('express')
const app=express()

let hours = new Date().getHours



app.get('/', (req, res)=> {
    if ( (hours >8) && (hours <17) ) res.sendFile(__dirname + '/public/Home.html');
    else res.sendFile(__dirname + '/public/OutOfService.html');
  })




app.use(express.static(__dirname +'/public'))

app.listen(3000,(err)=>{
    if(err) console.log("server is not running")
    else console.log("server is running on port 3000")
})