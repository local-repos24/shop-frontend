import React, { useState } from 'react';
import '../styles/pages/Login.css';

const Login = () =>{

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const redirectToRegister = (): any => {
        window.location.href="/auth/signup"
    }

    const setEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const saveForm = (): any => {  
        const sesion = {
            email: email,
            password: password
        };

        console.log(sesion);
        window.location.href="/dashboard/";
    } 

    return(
        <div className='body-login'>
            <div className="container-login">
                <div className='login-logo'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/08/Home-Depot-Symbol.png" alt="logo" className='thd-logo'/>
                    <h1>Sign In</h1>
                </div>
                <div className='login-input'>
                    <div className='login-input-username'>
                        <input type="email" placeholder='Email' value={email} onChange={setEmailValue}/>
                        <input type="password" placeholder='Password' value={password} onChange={setPasswordValue}/>
                        <h3>Forgot password?</h3>
                    </div>
                    <div className='login-input-buttons'>
                        <button className='create-count-btn' onClick={redirectToRegister}>Create account</button>
                        <button className='next-btn' onClick={saveForm}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;