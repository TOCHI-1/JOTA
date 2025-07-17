import React from 'react'
import Logo from './assets/logo.svg' 
import { Link } from 'react-router-dom'
import MyButtons from './Button'

const Registration = () => {
  return (
        <div className='h-[100vh] bg-[#E9EDC9] grid items-center justify-center px-[22px] '>
        <div className=' min-w-[300px]  md:bg-[#FAEDCD] px-[10px] md:px-0 rounded-[20px] md:rounded-[0] md:grid grid-rows-[minmax(0,_317px)_minmax(0,_127px)] grid-cols-[repeat(2,minmax(0,545px))] ' >
            <div className='hidden md:block '><div className='flex justify-center items-center font-[700] mt-[1em] mt-[3.5em] '>
            <img src={Logo} className='w-[50px] h-[40px] mr-[.5em] mt-[5px]  ' alt="" />
            <h3 className='w-fit'>JOTA</h3>

            </div>
            <h1 className='text-center !text-[36px] font-bold mt-[.5em] '>Welcome!</h1>
            <p className='w-[378px] mx-auto !text-[19px] text-center mt-[1em] px-[20px]'>Welcome !

Ready to start your incredible journey on self-improvement. First tell us a little about yourself !</p>
            </div>
            
            

            <div className='row-span-2 bg-[#CCD5AE] px-[30px] lg:px-[60px] py-[.5em] '>
            <div className='flex justify-center items-center font-[700] mt-[1em]  md:hidden'>
            <img src={Logo} className='w-[50px] h-[40px] mr-[.5em] mt-[5px]  ' alt="" />
            <h3 className='w-fit'>JOTA</h3>

            </div>
             <p className='text-center !text-[20px] font-bold mt-[.5em] md:hidden'>Welcome back !</p>
             <p className='text-center !text-[20px] font-bold mt-[.5em] md:mt-[1.5em] md:!text-[30px] '>Register</p>
             <form action="" className='flex flex-col '>
                <label htmlFor="Email address " className='mt-[1em]' >Email address</label>
                <input type="Email" className='bg-[#edfbe4] p-1 mt'  />
                <label htmlFor="Password" className='mt-[1em]'>Password</label>
                <input type="Password" className='bg-[#edfbe4] p-1' />
                <label htmlFor="Confirm Password" className='mt-[1em]'>Confirm Password</label>
                <input type="Password" className='bg-[#edfbe4] p-1' />
                
             </form>

             <p className='mt-[1em] text-center '>Already have an account ? <Link to="/Login" className='font-bold'> Log In </Link></p>
             <MyButtons path='/Registration' text="Next" className=' bg-[#7da37d]  ml-auto my-[1em]'/>
             </div>
             <div className='bg-[#D4A373]' ><div className=' w-full h-full bg-[#00000020] '></div></div>
           



            


        </div>
      
    </div>
  )
}

export default Registration
