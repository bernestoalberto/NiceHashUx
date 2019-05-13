
var express = require('express')
var app = express();
let nh require('./nh');


app.get('/balance',function(req,res){
    nh.getBalance(function(err,answer){
    
    if(err){
        throw err
    }
    res.json({answer});
    
    })
    });
    

app.get('/orders',function(req,res){
    nh.orders(function(err,answer){
    
    if(err){
        throw err
    }
    res.json({answer});
    
    })
    });

var server = app.listen(3000,function(){
    console.log('Server running at http://localhost:'+ server.address().port)
    
    
    });