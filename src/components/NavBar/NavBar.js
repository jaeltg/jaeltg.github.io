import React from 'react'
import {FaBars, FaLinkedin, FaGithub} from 'react-icons/fa'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, LinkedIn, Github} from './NavBarElements';

function NavBar({toggle}) {
    return (
        <>
          <Nav>
            <NavBarContainer>
                <NavLogo>
                    Jael Tinman
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="work">My Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact Me</NavLinks>
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

