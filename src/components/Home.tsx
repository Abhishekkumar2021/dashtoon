import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import { IoLogoGithub } from 'react-icons/io5'

const Home : React.FC = () => {
  return (
    <div className='Home'>
        <Navbar />
        <div className="content">
            <h1>Welcome to <span>Comic Generator</span></h1>
            <p>Comic Generator is a web app that generates comic from a given prompt. It uses the power of <span>HuggingFace API</span> to generate comic from a given prompt. It is a fun project that I made as an assignment for the <span>Dashtoon.</span></p>
            <a className='button' href="/start">Start comicing</a>
        </div>
        <a className='contribute' href="https://github.com/Abhishekkumar2021/dashtoon"><IoLogoGithub className='icon' /> Contribute to this project</a>
    </div>
  )
}

export default Home