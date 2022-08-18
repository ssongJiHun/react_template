const db = require(process.cwd() + '/app/models');
const Account = db.account;

const bcrypt = require("bcrypt");
const auth_jwt = require('../../utils/auth/auth_jwt');
//const jwt = require(process.cwd() + '/app/untils/auth/auth_jwt');

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await Account.findOne({
        where: { 'email': email },
    });
    

    if (user) {
        const hash = await bcrypt.compare(password, user.password);
        if (hash) {
            const accessToken = auth_jwt.access_sign(user);
            const refreshToken = auth_jwt.refresh_sign();

            user.update({ refreshtoken: refreshToken });
        
            res.status(200).send({
                ok: true,
                data: {
                    accessToken,
                    refreshToken,
                },
            });
            return;
        } else {
            res.status(401).send({
                ok: false,
                message: 'password is incorrect',
            });
            return;
        }
    }
    res.status(400).send({
        ok: false,
        message: 'user not exist',
    });
}


exports.signUp = async (req, res) => {
    const { email, password } = req.body;
    const hashsalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, hashsalt);

    try {
        const account = await Account.create({
            email: email,
            password: hashedPassword,
            refreshToken : ''
        });

        res.status(200).send({
            ok: true,
            message: 'create account',
        });
    } catch (err) {
        res.status(409).send({
            ok: false,
            message: err.message,
        });
    }

}