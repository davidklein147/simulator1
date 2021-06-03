const Mongoose = require('mongoose');
const internModel = require('../models/user-model')


function internController() {
    function getIntern(req, res) {
        console.log("get");
        internModel.findOne({name: req.body.name},function(err,doc){
            if(err){
               return res.status(500).send();
            }
            res.status(200).send(doc);
        })

    }
    function getAllIntern(req, res) {
        console.log("all");
        internModel.find(function (err, list) {
            if (err) {
               return res.status(500).send()
            }
            res.status(200).send(list);
        });

    }
    return {
        getIntern:getIntern,
        getAllIntern:getAllIntern 
    }
}
module.exports = internController();