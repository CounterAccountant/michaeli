import { Button, Input } from "@material-ui/core";
import { FunctionComponent, useState } from "react";

interface LoginParams {
    name?: string;
}




const Login: FunctionComponent<LoginParams> = (params: LoginParams) => {
    const [username, setUsername] = useState<string>(params.name || '');
    const [password, setPassword] = useState<string>();
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
                    setUsername(ev.target.value)
                }}
                value={username}
                title='Username'
            />
            <label>password is : {password}</label>
            <Input
                onChange={(ev) => {
                    setPassword(ev.target.value);
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