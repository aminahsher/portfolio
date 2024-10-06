import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/me.png)] bg-left lg:bg[15%] bg-cover'
    style={{backgroundSize: "25%"}}
    >
      <Navbar/>
    </div>
  )
}
