import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Protected({isLoggedIn, Children}) {
    if(isLoggedIn){
        console.log(Children)
        return Children;
    }
    return <Navigate to="/Blogs" replace />
}
