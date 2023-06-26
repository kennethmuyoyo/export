"use client"
import { title } from 'process'
import React from 'react'

interface props{
    buttonTitle: string
    handleClick: ()=>void
}

function ButtonWhite({buttonTitle,handleClick}:props) {
  return (
    <button 
    type="button" 
    onClick={handleClick}
    className="font-montserrat font-semibold text-green-600 bg-white hover:bg-green-600 border border-green-600 hover:text-white rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
        {buttonTitle}
    </button>
  )
}

export default ButtonWhite
