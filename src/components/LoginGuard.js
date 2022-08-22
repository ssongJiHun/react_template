
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import axios from 'src/utils/axios'

// 각종페이지(로그인 세션X) 들어갈때
const LoginGuard = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
     let isPost = false;

    useEffect(() => {
         if (isPost)
             return;
         isPost = true;
        axios.post('/jwt')
            .then((res) => { // 토큰 o -> ... page
                setLoading(false)
            })
            .catch((e)=>{
                navigate("/login", { replace: true })
            })
    }, [])

    if (loading)
        return <></>;


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
