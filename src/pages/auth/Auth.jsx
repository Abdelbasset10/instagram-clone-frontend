import React, {useState} from 'react'
import './auth.css'

import {AiFillEye} from 'react-icons/ai'
import {BsEyeSlashFill} from 'react-icons/bs'

const Auth = () => {
  const [isSignUp,setIsSignUp] = useState(false)
  const[showPassword1,setShowPassword1] = useState(false)
  const[showPassword2,setShowPassword2] = useState(false)
  const [userInfo,setUserInfo] = useState({
    userName:"",email:"",password:"",confirmPassword:""
  })

  const handleChange = (e) => {
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

  const togglePassword1 = () => {
    setShowPassword1(!showPassword1)
  }

  const togglePassword2 = () => {
    setShowPassword2(!showPassword2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userInfo);
  }
  return (
    <div className='auth'>
      <div className=' auth-div'>
        <div className='auth-content'>
          <div className='auth-head' >
            <h2>Instagram</h2>
            <p>{isSignUp ? 'Sign Up':'Sign In'} for see photos and vidoes and your freinds</p>
          </div>
          <form onSubmit={handleSubmit} >
            <input type="text" placeholder='userName' name='userName' value={userInfo.userName} onChange={handleChange} />
            {isSignUp && <input type="email" placeholder='Email' name='email' value={userInfo.Email} onChange={handleChange} />}
            <div style={{position:'relative'}} >
              <input type={showPassword1 ? 'text':'password'} placeholder='Password' name='password' value={userInfo.password} onChange={handleChange }/>
              {showPassword1 ? 
                <BsEyeSlashFill style={{position:'absolute',top:'10px',right:"10px",fontSize:'20px',cursor:'pointer'}}
                onClick={togglePassword1} />
                :
                <AiFillEye style={{position:'absolute',top:'10px',right:"10px",fontSize:'20px',cursor:'pointer'}}
                onClick={togglePassword1} />
              }
            </div>
              {isSignUp &&
                (
                  <div style={{position:'relative'}} >
                    <input type={showPassword2 ? 'text':'password'} placeholder='Confirm password' name='confirmPassword' value={userInfo.confirmPassword} onChange={handleChange} />
                    {showPassword2 ? 
                      <BsEyeSlashFill style={{position:'absolute',top:'10px',right:"10px",fontSize:'20px',cursor:'pointer'}}
                      onClick={togglePassword2} />
                    :
                      <AiFillEye style={{position:'absolute',top:'10px',right:"10px",fontSize:'20px',cursor:'pointer'}}
                      onClick={togglePassword2} />}
                  </div>
                )
              }
              
            
            <button className='btn' >{isSignUp ? 'Sign Up':'Sign In'}</button>
          </form>
          <div className='sign-p' >
            <p>{isSignUp ? 'You already have Account ?' : "You didn't have account ?"}</p>
            <p onClick={()=>setIsSignUp(!isSignUp)} >{isSignUp ? 'Sign In' : 'Sing Up'}</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Auth