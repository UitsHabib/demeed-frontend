import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    let { Cmp } = props;

    let navigate = useNavigate();
    useEffect(() => {
        if ( !localStorage.getItem('access_token')) {
            navigate("/admin/login");
        }
    }, []);
    
    return (
        <>
          <Cmp />
        </>
    );
}

export default Protected;