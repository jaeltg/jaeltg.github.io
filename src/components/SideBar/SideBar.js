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
                    <SideBarLink to="about" onClick={toggle}>
                        About Me
                    </SideBarLink>
                    <SideBarLink to="work" onClick={toggle}>
                        My Work
                    </SideBarLink>
                    <SideBarLink to="contact" onClick={toggle}>
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
