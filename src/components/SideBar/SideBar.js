import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, LinkedIn, Github} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        About Me
                    </SideBarLink>
                    <SideBarLink to="work" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        My Work
                    </SideBarLink>
                    <SideBarLink to="contact" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        Contact Me
                    </SideBarLink>
                </SideBarMenu> 
                <SideBtnWrap>
                        <LinkedIn href="https://www.linkedin.com/in/jael-tinman-grunfeld/" target="_blank">
                            <FaLinkedin />
                        </LinkedIn>
                        <Github href="https://github.com/jaeltg" target="_blank">
                            <FaGithub />
                        </Github>
                    </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
