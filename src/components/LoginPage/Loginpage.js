import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import "./Loginpage.css";

function Loginpage() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        let person = window.localStorage.getItem(email)
        console.log(person);
        if(person){
            const password = JSON.parse(person).password
            if(JSON.parse(person).password === pass){
                navigate("/Home")

            }else{
                setConfirm(prev => "You have entered wrong password ")

            }
        }else{
            setConfirm(prev => "Please entered a valid email")
        }
    }



  return (
    <div className='container'>
       <form className='loginpage' onSubmit={handleSubmit}>
       <h2>LogIn</h2>
       <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='email' required />
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' className='password' required />
        <button className='submit-btn' type='submit'>Log In</button>
        <h2 style={{color:"red"}}>{confirm ? confirm : null}</h2>
        <button className='link-btn'><a href='/register'>Don't have an account? Register here</a></button>

       </form>
      
      
    </div>
  )
}

export default Loginpage;

