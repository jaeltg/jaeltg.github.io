import React, {useState} from 'react'
import Home from '../components/Home/Home'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'
import WorkList from '../components/Work/WorkList'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

function Main() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle}/> 
          <Home/> 
          <About/>
          <WorkList/>
          <Contact/>
        </>
    )
}

export default Main
