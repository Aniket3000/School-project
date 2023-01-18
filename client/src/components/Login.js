import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../static/login.css'


function Login() {

  const [user,setUser] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document.forms[0].username.value);
    console.log(document.forms[0].password.value);
    setUser(document.forms[0].username.value);
    // check authentication
    // how to check authentication ?  => by making an api call to check for that particular username
    // api call will indirectly call database and check for credentials
    // dispatch redux commands
    // jwt - authentication
    // redux - global state
    
    // if valid then navigate to that page
    navigate('/students/dashboard')
  }

    return (
    <div className='login'>
      <div className="container_login">
        <div className="wrap_login">
          <form name="loginForm" onSubmit={handleSubmit}>
            <span className='form_title'>Login</span>
            <div className="select_role">
              <span style={{fontSize: "14px"}}>Select Your Role</span>
              <select name="select_role" style={{marginTop:"11px"}} className="form-select" aria-label="Default select example">
                <option selected>Select Role</option>
                <option value="1">Student</option>
                <option value="2">Teacher</option>
                <option value="2">Administrator</option>
              </select>
            </div>
            <hr className='userstyling' style={{marginBottom:"12px"}}></hr>
            <div className="username">
              <span style={{fontSize: "14px"}}>Username</span>
              <div className="username_input">
                <i id="persicon" className="bi bi-person"></i>
                <input id="userinput" type="text" name='username' 
                className="form-control userin shadow-none" 
                placeholder="Type your username" />
              </div>
              <hr className='userstyling'></hr>
            </div>
            <div className="password">
              <span style={{fontSize: "14px"}}>Password</span>
              <div className="password_input">
                <span className="material-symbols-outlined">lock</span>
                <input type="password" name="password" className="form-control shadow-none passin" placeholder="Type your password" />
              </div>
              <hr className='userstyling'></hr>
            </div>
            <div className="forgot_password">
              <span>Forgot password?</span>
            </div>
            <div className="login_btn">
              <button className='login_form_btn' type='submit'>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login