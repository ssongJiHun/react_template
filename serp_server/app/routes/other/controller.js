const db = require(process.cwd() + '/app/models');
const Account = db.account;

exports.me = async (req, res) => {
        Account.findAll({}).then((data) => {
                res.send( {data : data, req : req.user});
        })
}


