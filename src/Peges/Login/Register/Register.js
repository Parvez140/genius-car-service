import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const nevigate = useNavigate();
    const nevigateLogin = () => {
        nevigate('/login')
    }
    if(user) {
        nevigate('/home')
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    
    return (
        <div className='register-form'>
            <h2 style={{'textAlign': 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name"  placeholder='Your Name'/>
                <input type="email" name="email"  placeholder='Your Email' required />
                <input type="password" name="password"   placeholder='Password' required />
                <input type="submit" value="Register" />
            </form> <br />
            <p className='text-primary'>New to Genius Car <Link to='/login' onClick={nevigateLogin} className="text-danger text-decoration-none">Please Login</Link></p>
        </div>
    );
};

export default Register;