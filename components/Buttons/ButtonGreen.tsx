"use client"
import { title } from 'process'
import React from 'react'

interface props{
    buttonTitle: string
    handleClick: ()=>void
}

function ButtonGreen({buttonTitle,handleClick}:props) {
  return (
    <button 
    type="button" 
    onClick={handleClick}
    className="font-montserrat font-semibold text-white bg-green-500 border border-green-500 hover:bg-green-600 rounded-lg text-lg px-6 py-3">
        {buttonTitle}
    </button>
  )
}

export default ButtonGreen
