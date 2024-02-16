import React from "react";

const Login = () => {
    return (
        <div>
            <header className='logo'>
                <img src='../assets/img.jpg' alt='Logo'/>
                {/* <nav className='navbar'>
                        <a href='#'>Login/Register</a>
                        <a href='#'>About Us</a>
                        <a href='#'>Contact Us</a>
                </nav> */}
            </header>
            <div>
                <fieldset>
                    <legend>Login</legend>
                    <label>
                        <span>Username/Email:</span>
                        <input type='text' name='username' id='username' placeholder='Lagbaja Tamedu' required />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input type='password' name='password' id='password' placeholder='Enter Password' required />
                    </label>
                    <input type='submit' name='submit'/>
                </fieldset>
            </div>
        </div>
    )
}

export default Login