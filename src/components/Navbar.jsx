import React from 'react'

const Navbar = () => {
  return (
    <nav className=' m-1.5 p-2.5 bg-slate-800 flex rounded-2xl justify-between h-10'>
        <div className="logo items-center justify-around text-white  font-bold">
          
          <span className=' text-green-700'>&lt;</span>
          Pass
          <span className=' text-green-700'>Box/&lt;</span>

          </div>
      <ul>
        {/* <li className=' flex gap-4 text-white '>
            <a className=' hover:font-bold' href="/">Home</a>
            <a className=' hover:font-bold' href="/">about</a>
            <a className=' hover:font-bold' href="/">contact</a>
        </li> */}
      </ul>
      <button
        onClick={() => window.open("https://github.com/premchandanshive", "_blank")}
        className=' text-white rounded-md w-22 bg-green-700 flex justify-between ring-white ring-1' >
        <img className=' invert w-8 p-1' src="/icon/gethub.svg" alt="github logo" />
        <span className='font-bold px-1  pb-1.5'>GitHub</span>
      </button>
    </nav>
  )
}

export default Navbar
