import React from "react";

const Register = () => {
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
                    <legend>Register</legend>
                    <label>
                        <span>First Name:</span>
                        <input type='text' name='first_name' id='first_name' placeholder='Lagbaja Tamedu' required />
                    </label>
                    <label>
                        <span>Last Name:</span>
                        <input type='text' name='last_name' id='last_name' placeholder='Lagbaja Tamedu' required />
                    </label>
                    <label>
                        <span>Username:</span>
                        <input type='text' name='username' id='username' placeholder='Lagbaja Tamedu' required />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type='text' name='email' id='email' placeholder='Lagbaja Tamedu' required />
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

export default Register