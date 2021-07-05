import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#ffffff' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    font-size: 1 rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1300px;
`
export const NavLogo = styled(LinkS)`
color: #c9e265;
justify-content: flex-start;
cursor: pointer;
font-size: 1.8rem;
display: flex;
align-items: center;
font-weight: bold;
margin-left: 20px;
text-decoration: none;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
    color: #A3A3A3;
    margin-right:20px;
}
`
export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li `
height: 80px;
`
export const NavLinks = styled(LinkS) `
color: black;
display:flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height:100%;
cursor: pointer;
color: #A3A3A3;
font-weight: bold;

&.active {
    color: #c9e265;
    font-weight: bolder;
    font-size: 1.3rem;
    transition: 0.2s ease-in-out;

}

&:hover {
    color: #c9e265;
    font-weight: bolder;
    transition: 0.2s ease-in-out;
}
`
export const NavBtn = styled.nav `
display: flex;
align-items: center;
margin-right: 20px;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const LinkedIn = styled.a `
border: none;
background-color: transparent;
margin-right: 5px;
cursor: pointer;
display: block;
font-size: 1.8rem;
color: #c9e265;

&:hover {
    font-size: 2.2rem;
    transition: 0.2s ease-in-out;
}
`
export const Github = styled.a `
border: none;
background-color: transparent;
margin-left: 5px;
cursor: pointer;
display: block;
font-size: 1.8rem;
color: #c9e265;

&:hover {
    font-size: 2.2rem;
    transition: 0.2s ease-in-out;
}
`
