const userModel = require('../models/user-model');
const enCoding = require('../utils/crypto');
const token = require('../utils/token')

function userController() {
    function createUser(req, res) {
        console.log('post');
        console.log(req.body);
        if (!req.body ||
            !req.body.details ||
            !req.body.details.name ||
            !req.body.register ||
            !req.body.register.userName ||
            !req.body.register.password) {
            console.log("err");
            return res.status(400).send();
        }

        if (!req.body || !req.body.roleNum) {
            req.body.roleNum = 300;
        }
        req.body.register.password = enCoding.cipher(req.body.register.password);
        var newIntern = new userModel(req.body);
        newIntern.save(function (err, newDoc) {
            if (err) {
                console.log(err);
                return res.status(500).send(err)
            }
            res.status(201).send(newDoc);
            console.log(newDoc);
        });
    }

    function login(req, res) {
        console.log("login");
        console.log(req.body);
        if (!req.body.userName || !req.body.password) {
            return res.status(400).send()
        }
        userModel.findOne({ "register.userName": req.body.userName },
            { "details.id": 1, "details.name": 1, "register.userName": 1, "register.password": 1, roleNum: 1 }, function (err, doc) {
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                }
                if (!enCoding.compareCipher(req.body.password, doc.register.password))
                    return res.status(401).send();
                var split = '=!='
                var newToken = token.getEncrypto(doc.id + split + doc.roleNum + split + Date.now());
                res.status(200).send({ token: newToken })
            })
    }

    function chacking(req, res) {
        console.log("chacking");
        if (!req.body.userName) {
            return res.status(400).send()
        }
        userModel.findOne({ "register.userName": req.body.userName }, function (err, doc) {
            if (err) {
                return res.status(500).send();
            }
            res.status(200).send(doc != null);
        })

    }

    return {
        createUser,
        login,
        chacking
    }
}

module.exports = userController();