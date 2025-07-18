import React from 'react'
import Logo from './assets/logo.svg' 
import { Link } from 'react-router-dom'
import MyButtons from './Button'


const Login = () => {
  return (
    <div className='h-[100vh] bg-[#E9EDC9] grid items-center justify-center px-[22px] '>
        <div className=' min-w-[300px]  md:bg-[#FAEDCD] px-[10px] md:px-0 rounded-[20px] md:rounded-[0] md:grid grid-rows-[minmax(0,_189px)_minmax(0,_255px)] grid-cols-[repeat(2,minmax(0,545px))] ' >
            <div className='hidden md:block'><div className='flex justify-center items-center font-[700] mt-[1em] mt-[3.5em] '>
            <img src={Logo} className='w-[50px] h-[40px] mr-[.5em] mt-[5px]  ' alt="" />
            <h3 className='w-fit'>JOTA</h3>

            </div>
            <h1 className='text-center !text-[36px] font-bold mt-[.5em] '>Welcome back !</h1></div>
            

            <div className='row-span-2 bg-[#CCD5AE] px-[30px] lg:px-[60px] py-[.5em] '>
            <div className='flex justify-center items-center font-[700] mt-[1em]  md:hidden'>
            <img src={Logo} className='w-[50px] h-[40px] mr-[.5em] mt-[5px]  ' alt="" />
            <h3 className='w-fit'>JOTA</h3>

            </div>
             <p className='text-center !text-[20px] font-bold mt-[.5em] md:hidden'>Welcome back !</p>
             <p className='text-center !text-[20px] font-bold mt-[.5em] md:mt-[1.5em] md:!text-[30px] '>Login</p>
             <form action="" className='flex flex-col '>
                <label htmlFor="Email address " className='mt-[1em]' >Email address</label>
                <input type="Email" className='bg-[#edfbe4] p-1 mt'  />
                <label htmlFor="Password" className='mt-[1em]'>Password</label>
                <input type="Password" className='bg-[#edfbe4] p-1' />
                
             </form>
             <p className='mt-[1em] text-right'>Forgot password ?</p>
             <p className='mt-[1em] text-center '>New to JOTA? <Link to="/Signup" className='font-bold'> Sign Up </Link></p>
             <MyButtons text="Submit"  className=' bg-[#7da37d]  mx-auto my-[1em]'/>
             </div>
             <div className='bg-[#D4A373]' ><div className=' w-full h-full bg-[#00000020] '></div></div>
           



            


        </div>
      
    </div>
  )
}

export default Login
