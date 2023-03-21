import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(email);
        let userDate = {password:pass, Name:name}
        window.localStorage.setItem(email, JSON.stringify(userDate))
        navigate("/")
    }


  return (
    <div className='container1'>

       <form className='registerpage' onSubmit={handleSubmit}>
       <i className="fa-solid fa-lock"></i>
       <h2>Sign Up</h2>
       <label htmlFor='name'>Name</label>
       <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='name' required />
       <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='email' required />
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='Password' className='password' required />
        <button className='reg-sub-btn' type='submit'>Register</button>
        <button className='reg-btn'><a href='/'>Allready have an Acccount? LogIn here</a></button>
       </form>
       
      
    </div>
  )
}

export default Register;

