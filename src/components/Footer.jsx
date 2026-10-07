import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-slate-800  text-white flex flex-col justify-center items-center w-full'>
            <div className="logo font-bold text-white text-2xl">

                <span className=' text-green-700'>&lt;</span>Pass
                <span className=' text-green-700'>Box/&lt;</span>

            </div>

            <div className=' flex justify-center text-white mx-2 my-2'>
                Created with <img className=' w-6' src="/icon/heart.png" alt="" /> by prem
            </div>
        </div>
    )
}

export default Footer
