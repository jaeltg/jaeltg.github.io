import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SideBarContainer = styled.aside `
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #EBEBEB;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: #A3A3A3;
`

export const Icon = styled.div `
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SideBarWrapper = styled.div `
color: #A3A3A3;
`

export const SideBarMenu = styled.ul `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    gird-template-rows: repeat(5, 60px;)
}
`

export const SideBarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #A3A3A3;
cursor: pointer;

&:hover {
    color: #c9e265;
    font-weight: bolder;
    font-size: 2.0rem;
    transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div `
display: flex;
justify-content: center;
`
export const LinkedIn = styled.a `
border: none;
background-color: transparent;
margin-right: 10px;
cursor: pointer;
display: block;
font-size: 2.8rem;
color: #c9e265;

&:hover {
    font-size: 3.2rem;
    transition: 0.2s ease-in-out;
}
`
export const Github = styled.a `
border: none;
background-color: transparent;
margin-left: 20px;
cursor: pointer;
display: block;
font-size: 2.8rem;
color: #c9e265;

&:hover {
    font-size: 3.2rem;
    transition: 0.2s ease-in-out;
}
`