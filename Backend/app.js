const express=require('express');
const bodyParser=require('body-parser');
const dbConnect=require('./dbConnect')
var cors=require('cors');
var mysql=require('mysql');



const app=express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(
  
    //connection(mysql,{
       // host: 'localhost', //'localhost',
       // user: 'root',
        //password : 'password',
       // port : 3306, //port mysql
       // database:'test'

    //},'single')
//);

function insert(data,res)
{var connection = dbConnect.connection;
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("INSERT INTO users set ? ",data,
    function(err, rows)
    {

      if (err){
        //If error
          res.status(400).json('Sorry!!Unable To Add');
          console.log("Error inserting : %s ",err );
         }
     else
      //If success
      res.status(200).json('Data recieved!!')

    }
    );
  });
}

app.post('/',(req,res)=>{
    let {fname,lname,age,pno,email,about,password}=req.body;
    var data={
        fname:fname,
        lname:lname,
        age: age,
        email:email,
        about:about,
        password:password,
        phone:pno,
    };
    insert(data,res);
});



app.listen(5000,()=>{
console.log('on port 3000');
});
