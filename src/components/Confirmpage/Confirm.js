import React from 'react'
import  "./confirm.css";
import { useNavigate } from 'react-router-dom';

function Confirm() {


    const navigate = useNavigate()

    const homer = () => {
        navigate("/Home")
    }




  return (
    <>
    <button id='bt-home' onClick={homer}>Home</button>
    <div className='thank'>
        
      <h2>ThankYou !!!</h2>
    </div>
    </>
  )
}

export default Confirm;

