import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import axios from 'src/utils/axios'

// 로그인 페이지(로그인 세션O) 들어갈때
const RouterGuard = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let isPost = false;

    useEffect(() => {
        if (isPost)
            return;
        isPost = true;

        axios.post('/jwt')
            .then((res) => { // 토큰 o -> main page
                navigate("/", { replace: true })
            })
            .catch((err) => { // 토큰x -> login page
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
