var express=require('express');
var app=express();

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", "./views");


function inRange(req,res,next) {

     let x = new Date()
     const d= x.getDay()
     const h= x.getHours()
        //console.log(d,h)
        if ((d >= 1 && d <= 5) && (h >=9 && h<=17))
        {
            next()
        }
        else
        {
            res.render('holliday')
        }
// console.log(x.getDay()) 
// console.log(x.getHours())
// console.log(x.getMinutes())
    // if(day >= _from && day <= _to)
    //   return true;
  
    // return false;
  }



app.get("/",inRange ,(req,res)=> {
    res.render("homePage");
})

app.get("/services",inRange,function(req,res) {
    res.render("servicesPage");
})

app.get("/contact",inRange ,(req,res)=> {
    res.render("contactPage")
})

app.listen(3000);