import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavBarElements';

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
                </NavMenu>
            </NavBarContainer>
          </Nav>  
        </>
    )
}

export default NavBar

