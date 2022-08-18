const auth_jwt = require('./auth_jwt');
const jwt = require('jsonwebtoken');

const db = require(process.cwd() + '/app/models');
const Account = db.account;

const jwt_refresh = async (req, res) => {
    // not exist header

    
    const authorization = req.headers.authorization === 'Bearer undefined' ? null : req.headers.authorization;
    const refreshtoken = req.headers.refreshtoken === 'undefined' ? null : req.headers.refreshtoken;

    if (!authorization|| !refreshtoken){
        res.status(400).send({ ok: false, message: 'AccessToken or refreshRoken not exist' });
        return;
    }
    const authToken = req.headers.authorization.split('Bearer ')[1];
    const refreshToken = req.headers.refreshtoken;
    
    // accessToken verify
    const authResult = auth_jwt.access_verify(authToken);

    // accessToken: true
    if (authResult.ok === true){
        res.status(200).send({ ok: true, message: 'Acess token is not expired!' });
        return;
    }
        
    // accessToken : false
    // access token message : invalid token (비정상)
    if (authResult.message !== 'jwt expired'){
        res.status(400).send({ ok: false, message: 'No authorized!' });
        return;
    }

    // accessToken이 만료되면 verify해도 정보를 알 수 없기에 decode 진행
    const decoded = jwt.decode(authToken); 
    if (decoded === null) {
        res.status(400).send({ok: false, message: 'No authorized!'});
        return;
    }

    // access token message : jwt expired 
    // DB_refreshToken
    let user = null;
    try {
        user = await Account.findOne({ where: { 'email': decoded.email } });
    } catch (err) {
        res.status(400).send({ ok: false, message: err.message });
        return;
    }

    // refreshToken verify
    const refreshResult = auth_jwt.refresh_verify(refreshToken, user.refreshtoken);

    // access token : false, refreshToken : false
    if (refreshResult === false){
        res.status(400).send({ ok: false, message: 'No authorized!' });
        return;
    }
 
    // access token : false, refreshToken : true
    const newAccessToken = auth_jwt.access_sign(user);
    res.status(201).send({
        ok: true, data: {
            accessToken: newAccessToken,
            refreshToken,
        }
    });

};

module.exports = jwt_refresh;