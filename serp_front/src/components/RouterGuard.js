import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import api from 'src/utils/axios_api'

// 로그인 페이지(로그인 세션O) -> 대시보드
const RouterGuard = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let isPost = false;

    useEffect(() => {
        if (isPost)
            return;
        isPost = true;

        const user = localStorage.getItem('user');

        if (!user) {
            setLoading(false)
            return;
        }

        api.post('/refresh')
            .then((res) => {
                // 토큰 o
                if (res.status == 201) { // 엑세스만 재발행
                    localStorage.removeItem('user')
                    localStorage.setItem('user', JSON.stringify(res.data, ['accessToken', 'refreshToken']))
                }
                navigate("/", { replace: true })
            })
            .catch((err) => {
                // 토큰 x
                setLoading(false)
            })
    }, [])

    if (loading)
        return (<>Loading</>);

    return (
        <> {children}   </>
    );
};

RouterGuard.propTypes = {
    children: PropTypes.node
};

export default RouterGuard;
