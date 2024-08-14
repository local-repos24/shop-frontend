import React, { useState } from 'react';
import '../styles/pages/Register.css';

const Register = (): JSX.Element =>{

    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullname, setFullName] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const setEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const setUsernameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const setFullNameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }

    const setAgeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    }
    const setGenderValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    }

    return (
        <div className='body-register'>
            <div className="container-register">
                <div className='head-form-section'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/08/Home-Depot-Symbol.png" alt="logo" className='thd-logo'/>
                    <h1>Create an Account</h1>
                </div>
                <div className='input-form-section'>
                        <input type="email" placeholder="Email" value={email} onChange={setEmailValue}/>
                        <input type="text" placeholder="Username" value={username} onChange={setUsernameValue}/>
                        <input type="password" placeholder="Password" value={password} onChange={setPasswordValue}/>
                        <input type="text" placeholder="full name" value={fullname} onChange={setFullNameValue}/>
                        <input type="text" placeholder="Age" value={age} onChange={setAgeValue}/>
                        <select name="gender" id="gender" value={gender} onChange={setGenderValue}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <button className='register-btn'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register;