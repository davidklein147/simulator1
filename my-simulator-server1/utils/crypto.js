const bcrypt = require('bcrypt');


function enCoding(){
    function cipher(password){
        var hash = bcrypt.hashSync(password,10)
        return hash;
    }
    function compareCipher(password, hash){
        return bcrypt.compareSync(password, hash)
    }
    return{
        cipher,
        compareCipher
    }
}

module.exports = enCoding();