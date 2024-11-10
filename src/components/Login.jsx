
import React, { useState } from 'react'
import { loginUser } from '../api/authUser';
import { Link } from 'react-router-dom'; 

export default function Login() {
    const [identifier ,setIdentifier] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault()
        const crendentials = {identifier,password};
        const response = await loginUser(crendentials);
        if(response.message){
            setMessage(response.message);
        }
    }
  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
            <label htmlFor="identifier">Username:</label>
            <input type="text" name="identifier" id="identifier" value={identifier} onChange={(e)=>setIdentifier(e.target.value)} /><br/>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button type="submit">login</button><br/>
            <Link to='/register'>Sign up</Link>
        </form>
        {message && <p>{message}</p>}
    </div>
  )
}
