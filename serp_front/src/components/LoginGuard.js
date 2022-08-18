
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import api from 'src/utils/axios_api'

// 각종페이지(로그인 세션X) -> 로그인페이지
const LoginGuard = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let isPost = false;

    useEffect(() => {
        if (isPost)
            return;
        isPost = true;

        api.post('/refresh')
            .then((res) => {
                // 토큰 o
                if (res.status == 201) { 
                    localStorage.removeItem('user')
                    localStorage.setItem('user', JSON.stringify(res.data, ['accessToken', 'refreshToken']))
                }
                setLoading(false)

            })
            .catch((err) => {
                // 토큰 x
                navigate("/login", { replace: true })
            })
    }, [])

    if (loading)
        return (<>Loading</>);


    return (
        <>
            {children}
        </>
    );
};

LoginGuard.propTypes = {
    children: PropTypes.node
};

export default LoginGuard;
