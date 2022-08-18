const express = require('express');
const router = express.Router();
const jwt_refresh = require('../utils/auth/jwt_refresh')
const jwt_verify = require('../utils/auth/jwt_verify')


//jwt 인증 헤더 없이도 접근 가능한 라우터_미들웨어
router.use('/account', require('./account')); // 콜백 라우터 변수

// jwt 인증 확인 
router.use('/api', jwt_verify); // 백엔드 _ (API 이용 마다 자동 검증)

// 사용자 라우터 ----------------------- req.user 쓸수 있음
router.use('/api/other', require("./other"));


router.post('/refresh', jwt_refresh); // 프론트에서 API 호출 시 매번 검증


module.exports = router;