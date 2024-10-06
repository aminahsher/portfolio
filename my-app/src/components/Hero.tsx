import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/me.png)] bg-left lg:bg[15%] bg-cover'
    style={{backgroundSize: "25%"}}
    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        
      <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
      <div>
        <p>I'm</p>
        <p>Aminah</p>
        <p>Ali</p>
      </div>
      </div>
      </div>
    </div>
  )
}
