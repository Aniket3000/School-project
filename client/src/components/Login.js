import React from 'react'
import '../static/login.css'


function Login() {
  return (
    <div className='login'>
      <div className="container_login">
        <div className="wrap_login">
          <form action="">
            <span className='form_title'>Login</span>
            <div className="username">
              <span style={{fontSize: "14px"}}>Username</span>
              <div className="username_input">
                <i id="persicon" className="bi bi-person"></i>
                <input id="userinput" type="text" 
                className="form-control userin shadow-none" 
                placeholder="Type your username" />
              </div>
              <hr className='userstyling'></hr>
            </div>
            <div className="password">
              <span style={{fontSize: "14px"}}>Password</span>
              <div className="password_input">
                <span className="material-symbols-outlined">lock</span>
                <input type="password" className="form-control shadow-none passin" placeholder="Type your password" />
              </div>
              <hr className='userstyling'></hr>
            </div>
            <div className="forgot_password">
              <span>Forgot password?</span>
            </div>
            <div className="login_btn">
              <button className='login_form_btn'>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login