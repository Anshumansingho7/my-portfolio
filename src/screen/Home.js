import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Home.css'; 

export default function Home() {
  return (
    <div className='home m-20'>
      <div className="flex flex-col items-center justify-center h-screen text-foreground">
        <nav className="mb-4">
          <Link to="/projects" className="mx-2 text-muted hover:text-muted-foreground">Projects</Link>
          <Link to="/contact" className="mx-2 text-muted hover:text-muted-foreground">Contact</Link>
          <Link to="/resume" className="mx-2 text-muted hover:text-muted-foreground">Resume</Link>
        </nav>
        <h1 className="text-6xl font-bold mb-4">Anshuman Singh Shaktawat</h1>
        <p>Hi, Welcome to my portfolio site. I'm a Full Stack Developer with knowledge of React and Ruby on Rails.</p>
      </div>
    </div>
  )
}
