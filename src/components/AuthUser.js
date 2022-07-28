import {React, useState} from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
       // console.log("PPP");
        //return false;
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);

        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_details = JSON.parse(userString);

        return user_details;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        //console.log("vvv",JSON.stringify(token));
        //return false;
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const http = axios.create({
        baseURL:"http://127.0.0.1/dummy/public/api/",
        headers:{
            "Content-type" : "application/json"
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}