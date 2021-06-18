import React, {useState} from 'react'
import Home from '../components/Home/Home'
import { infoObjOne, infoObjTwo } from '../components/InfoSection/Data'
import Info from '../components/InfoSection/Info'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/SideBar/SideBar'
import WorkList from '../components/Work/WorkList'

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
          <Info {...infoObjOne}/>
          <WorkList/>
          <Info {...infoObjTwo}/>
        </>
    )
}

export default Main
