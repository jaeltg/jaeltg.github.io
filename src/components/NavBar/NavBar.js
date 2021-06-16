import React from 'react'
import {FaBars, FaLinkedin, FaGithub} from 'react-icons/fa'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, LinkedIn, Github} from './NavBarElements';

function NavBar() {
    return (
        <>
          <Nav>
            <NavBarContainer>
                <NavLogo>
                    Jael Tinman
                </NavLogo>
                <MobileIcon>
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
                    <LinkedIn>
                        <FaLinkedin />
                    </LinkedIn>
                    <Github>
                        <FaGithub />
                    </Github>
                </NavBtn>
            </NavBarContainer>
          </Nav>  
        </>
    )
}

export default NavBar

