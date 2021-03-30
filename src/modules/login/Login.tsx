import { Button, Input } from "@material-ui/core";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getIsLoggedIn, getPassword, getUsername, setPassword, setUsername } from "./LoginReducer";

interface LoginParams {
    name?: string;
}




const Login: FunctionComponent<LoginParams> = (params: LoginParams) => {
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn);
    const history = useHistory();
    useEffect(()=>{
        if (isLoggedIn === true) {
            history.push('/orders')
        }
    },[isLoggedIn])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >

            {
                params.name ?
                <p>{params.name}</p>
                :
                <p>No name</p>
            }
            <label>username is : {username}</label>
            <Input
                onChange={(ev) => {
                    dispatch(setUsername(ev.target.value))
                }}
                value={username}
                title='Username'
            />
            <label>password is : {password}</label>
            <Input
                onChange={(ev) => {
                    dispatch(setPassword(ev.target.value))
                }}
                value={password}
                title='Username'
                type='password'
            />
            <Button
                style={{
                    marginTop: 50
                }}
                onClick={() => {
                    
                }}
            >
                Submit
            </Button>
        </div>
    )
}

export default Login;