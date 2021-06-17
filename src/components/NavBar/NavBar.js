import React from 'react'
import {FaBars, FaLinkedin, FaGithub} from 'react-icons/fa'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, LinkedIn, Github} from './NavBarElements';
import {animateScroll as scroll} from 'react-scroll'

function NavBar({toggle}) {
    return (
        <>
          <Nav>
            <NavBarContainer>
                <NavLogo to="home"
                   smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
                    Jael Tinman
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="work"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >My Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <LinkedIn href="https://www.linkedin.com/in/jael-tinman-grunfeld/" target="_blank">
                        <FaLinkedin />
                    </LinkedIn>
                    <Github href="https://github.com/jaeltg" target="_blank">
                        <FaGithub />
                    </Github>
                </NavBtn>
            </NavBarContainer>
          </Nav>  
        </>
    )
}

export default NavBar

