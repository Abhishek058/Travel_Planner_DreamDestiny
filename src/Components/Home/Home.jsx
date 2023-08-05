import React from 'react'
import "./home.css"
import video from 'D:\Projects\dream-destiny\asset\vid1.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'>home</div>
      <video src={video}></video>
    </section>
  )
}

export default Home
