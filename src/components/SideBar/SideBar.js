import React from 'react'
import { SideBarContainer, Icon, CloseIcon} from './SideBarElements'

const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about">
                        About Me
                    </SideBarLink>
                    <SideBarLink to="work">
                        My Work
                    </SideBarLink>
                    <SideBarLink to="contact">
                        Contact Me
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
