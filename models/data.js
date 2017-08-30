var mongoose = require('mongoose');
var schema=mongoose.Schema;


var dataSchema=new schema({
   x:{
       type:String,
       required:true,
       unique:true
   } ,
    y:{
        type:Number,
        required:true
    }    
    
});


module.exports=mongoose.model('data',dataSchema);
