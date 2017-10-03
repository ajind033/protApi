var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var protSchema = new Schema ({

    cust_id : {
          
        type : String,
        required : [true,'Customer ID is missing']
    },
    account_no : {
        type : String,
        required :  [true,'Account NO is missing'],
        unique : true
   
    },
    debit_card_no :{
        type : String,
        required :  [true,'Debit Card No is missing']
      },
    name :{
        type : String,
        required :  [true,'Name is missing']
    },

   address:{
    type : String,
    required :  [true,'Address is missing']
}
   
}
);


// Export Model

module.exports = mongoose.model("prot",protSchema);