import React, { useState } from 'react'
import '../static/login.css'

function Login() {

  return (
    <div className='login'>
        <div className="login_image">
            <img src="https://edusecure.in/ManavMangalchandigarh/login/images/bg.jpg" alt="..." />
        </div>
        <div className="login_form">
            <img src="https://edusecure.in/ManavMangalchandigarh/login/images/logo.svg" alt="..." />
            <select className="form-select one" aria-label="Default select example">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select two" aria-label="Default select example">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group mb-3">
              <input type="text" className="form-control" 
              placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" 
              placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button type="button" className="btn btn-primary">Login</button>
        </div>
    </div>
  )
}

export default Login