var Protone = require ('..//models/prsevice.model.js');

exports.create = (req,res) =>{
    
        var entry = new Protone({
            debit_card_no : req.body.debit_card_no,
            name : req.body.name,
            securities_scheme_id : req.body.securities_scheme_id,
            cust_id : req.body.cust_id,
            account_no : req.body.account_no,
            address : req.body.address
        });
        entry.save()
        .then(() => res.send('Success saving Customer '))
        .catch((err) => res.send(err));
    };

    exports.getaCust = (req,res,account_no1) =>{

        Protone.find({ 'account_no': account_no1 },'-__v -_id',  (err, cust)=> {
                       if(err)
                        res.send(err);
                        
                       res.send(JSON.stringify(cust));
        });
    }
