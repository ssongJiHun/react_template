const auth_jwt = require('./auth_jwt');
const jwt = require('jsonwebtoken');

const db = require(process.cwd() + '/app/models');
const Account = db.account;

// 헤더 ( accesstoken + refreshtoken ) return : 오류면 다시 로그인 또는 헤더 오류
// 프론트에서 리로드 될때마다 호출 또는 백엔드 라우터 설정
const jwt_refresh = async (req, res) => {
    if (req.headers.authorization && req.headers.refreshtoken) {
        const authToken = req.headers.authorization.split('Bearer ')[1];
        const refreshToken = req.headers.refreshtoken;

        const authResult = auth_jwt.access_verify(authToken); // 엑세스 토큰있었으나 검증 단계
        const decoded = jwt.decode(authToken); // 애초에 토큰이 존재하지 않을 경우
        if (decoded === null) {
            res.status(400).send({
                ok: false,
                message: 'No authorized!',
            });
        }


        let user = null;
        try {
            user = await Account.findOne({
                where: { 'email': decoded.email },
            });
        } catch (err) {
            res.status(400).send({
                ok: false,
                message: err.message,
            });
        }


        // header refresh token 과 db refresh token 비교
        const refreshResult = auth_jwt.refresh_verify(refreshToken, user.refreshtoken);

        // access token 만료 (1번, 2번)
        if (authResult.ok === false && authResult.message === 'jwt expired') {
            // 1. refresh token 만료 (access token 만료) - 다시 로그인해야함!!!
            if (refreshResult.ok === false) {
                res.status(400).send({
                    ok: false,
                    message: 'No authorized!',
                });
            } else {
                // 2. refresh token 유효 (access token 만료) 엑세스토큰만 다시 프론트에 보관
                const newAccessToken = auth_jwt.access_sign(user);

                res.status(201).send({
                    ok: true,
                    data: {
                        accessToken: newAccessToken,
                        refreshToken,
                    },
                });
            }
        } else {
            // 3. access token 유효 ( 정상  )
            res.status(200).send({
                ok: true,
                message: 'Acess token is not expired!',
            });
        }
    } else { // access token 또는 refresh token이 헤더에 없는 경우
        res.status(400).send({
            ok: false,
            message: 'Access token and refresh token are need for refresh!',
        });
    }
};

module.exports = jwt_refresh;