import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyButtons = ( {text, path ="/", className = ""} ) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(path);

    }
  return (
    <button 
    onClick={handleClick}
    className={`max-w-[293px] min-w-[147px]  max-h-[75px] min-h-[38px] rounded-[25px] lg:rounded-[50px] block  ${className}`} >


       {text}

    </button>
  )
}

export default MyButtons
