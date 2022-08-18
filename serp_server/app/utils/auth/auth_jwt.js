const jwt = require('jsonwebtoken');
const db = require(process.cwd() + '/app/models');
const Account = db.account;

const accessKey = "serp-auth-access-key";
const refreshKey = "serp-auth-refresh-key";

module.exports = {
    access_sign: (user) => {
        const payload = {
            email: user.email
        };
        return jwt.sign(payload, accessKey, {
            expiresIn: '10000', 
           // expiresIn: '300000', // 5분 (1000 = 1초) * (300초 = 5분)
        });
    },
    access_verify: (token) => {
        try {
            let decoded = jwt.verify(token, accessKey);
            return {
                ok: true,
                user: decoded,
            };
        } catch (err) {
            return {
                ok: false,
                message: err.message,
            };
        }
    },
    refresh_sign: () => {
        return jwt.sign({}, refreshKey, {
            expiresIn: '1d',
        });
    },
    refresh_verify: async (headerTkoen, dbToken) => {
        try {
            if (headerTkoen === dbToken) {
                try { //  예외 처리를 이용 jwt.verify 오류가 나면 토큰 식별 X
                    jwt.verify(headerTkoen, refreshKey);
                    return true;
                } catch (err) {
                    return false;
                }
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
}