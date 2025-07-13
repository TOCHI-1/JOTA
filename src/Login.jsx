import React from 'react'
import Logo from './assets/logo.svg' 
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='h-[100vh] bg-[#E9EDC9] grid items-center justify-center px-[22px]'>
        <div className=' min-w-[300px] bg-[#CCD5AE] px-[10px] rounded-[20px]' >
            <div className='flex justify-center items-center font-[700] mt-[1em]'>
            <img src={Logo} className='w-[50px] h-[40px] mr-[.5em] mt-[5px]  ' alt="" />
            <h3 className='w-fit'>JOTA</h3>

            </div>
             <p className='text-center !text-[20px] font-bold mt-[.5em]'>Welcome back !</p>
             <p className='text-center !text-[20px] font-bold mt-[.5em]'>Login</p>
             <form action="" className='flex flex-col '>
                <label htmlFor="Email address " className='mt-[1em]' >Email address</label>
                <input type="Email" className='bg-[#edfbe4] p-1 mt'  />
                <label htmlFor="Password" className='mt-[1em]'>Password</label>
                <input type="Password" className='bg-[#edfbe4] p-1' />
                
             </form>
             <p className='mt-[1em] text-right'>Forgot password ?</p>
             <p className='mt-[1em] '>New to JOTA? <Link className='font-bold'> Sign Up </Link></p>


            


        </div>
      
    </div>
  )
}

export default Login
