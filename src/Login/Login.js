import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import icon from '../assets/features-icon-3.png'
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';
import Footer from '../Shared/Footer/Footer';
import toast from 'react-hot-toast';

const Login = () => {
  const [user,setUser]=useState()
    const {login,googlesignIn} =useContext(authContext)
    const navigate=useNavigate()
    const buttonHandler = event =>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const user={email,password}
        setUser(user)
        console.log(user)
        
        
        login(email,password)
        .then(res=>{
            console.log(res.user)
            navigate('/')
        })
        

       
        
    }
    
    const googleLogin=()=>{
        googlesignIn()
        .then(res=>{
            console.log(res.user)
            navigate('/')
            
        })
    }
    useEffect(() => {
      if (user) {
        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        })
          .then(response => response.json())
          .then(data => {
            
            console.log(data);
           
          })
          .catch(error => {
            console.error('Error:', error);
            
          });
      }
    }, [user]);
    
    return (
        <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen">
        <form onSubmit={buttonHandler} className="">
          <img src= {icon} alt='' className="ml-20 mb-5 rounded-lg shadow-2xl" />
          <div>
          <h1 className='text-center text-mytheme-gold text-3xl -tracking-tighter'>Login</h1>
          <input type="text" name='email' placeholder="Your Email" className="bg-black mt-5 input input-bordered input-warning w-full text-mytheme-gold " required /><br></br>
          <input type="text" name='password' placeholder="Password" className="bg-black mt-5 input input-bordered input-warning w-full text-mytheme-gold" required />
            <button className="btn btn-warning mt-5">Login</button>
            <p className='text-mytheme-crimson -tracking-tighter mt-2'>don't have an account?<Link className='text-mytheme-gold' to='/signup'>Signup</Link></p>
            <div className="divider mt-3 text-mytheme-silver">OR</div>
            <button onClick={googleLogin}  className='btn btn-warning text-xl'>Login with Google</button>

           
          </div>
        </form>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Login;