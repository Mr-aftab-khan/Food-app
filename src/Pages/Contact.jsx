import React, { useState } from 'react'
import style from '../Styles/Contact.css'
const Contact = () => {
  const [newUser,setNewUser]=useState(false);
  return (
    <div className='contact-img mb-5'>

      <form action="https://www.w3schools.com/action_page.php" class="contact-container mb-5">
    {newUser ? <h2 className='text-center'>Sign Up</h2>:<h2 className='text-center'>Log In</h2>}
    
    <label for="email"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="email" required/>
  {newUser && <div>    
    <label for="email"><b>Phone Number</b></label>
    <input type="text" placeholder="Enter Phone Number" name="email" required/>
    
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>
    </div>
  }  <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" class="contact-btn">{newUser ?"SingUp":"Login"}</button>
  <a href="#" onClick={()=>{
    setNewUser(!newUser)
  }}>{newUser ?"Login":"Create Account"}</a>
  </form>
    </div>
  )
}

export default Contact