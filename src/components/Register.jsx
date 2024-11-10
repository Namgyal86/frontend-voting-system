import {useState} from 'react'
import React from 'react'
import { registerUser } from '../api/authUser';
import {useNavigate} from 'react-router-dom'

export default function Register() {

    const navigate = useNavigate();
    const [formData , setFromData] = useState({
        name:'',
        username:'',
        email:'',
        voter_id:'',
        password:'',
        cpassword:'',
    })
    const handleChange  = (e) => setFromData({...formData,[e.target.name]:e.target.value})

    const onhandlesubmit = async (event) =>{
        event.preventDefault();
        if(formData.password !== formData.cpassword){
            alert('password do not match')
            return;
        }
        try{
            const response = await registerUser(formData);
            if(response.message){

                alert(response.message);
                navigate('/')
            }
            
        }
        catch(error){
            alert(error.response?.data?.message || "Registration failed")
        }
    }
  return (
    <div className='register'>
        <form onSubmit={onhandlesubmit}>
            <label htmlFor='name'>Name:</label>
            <input type="text"  name ='name' id="name"  value = {formData.name} onChange={handleChange} placeholder='name'/><br/>

            <label htmlFor='username'>Username:</label>
            <input type="text"  name ='username' id="username"  value = {formData.username} onChange={handleChange} placeholder='username'/><br/>

            <label htmlFor='email'>Email:</label>
            <input type="email"  name ="email" id="email" value={formData.email} onChange={handleChange} placeholder='email'/><br/>

            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder='password'/><br/>

            <label htmlFor='cpassword'>Confirm Password:</label>
            <input type="password" name ="cpassword" id="cpassword" value={formData.cpassword} onChange={handleChange} placeholder='confirm password'/><br/>

            <label htmlFor='voter_id'>Voter_id:</label>
            <input type="number" name="voter_id" id="voter_id" value={formData.voter_id} onChange={handleChange} placeholder='voter id'/><br/>

            <button type="submit">Register</button><br/>
        </form>

    </div>
  )
}
