import styled from 'styled-components';
import {MdClose} from 'react-icons/md'

export const Background = styled.div `
width: 100%;
height:100%;
background: rgba(0, 0, 0, 0.4);
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`
export const ModalWrapper = styled.div `
width: 800px;
height: 680px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-rows: 1fr 1fr;
position: relative;
z-index: 99;
border-radius: 10px;
`

export const ModalImg = styled.img `
width: 100%;
height: 100%;
border-radius: 10px 10px 0px 0px;
background: #000;
`

export const ModalContent = styled.div `
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
`

export const Title = styled.h2 `
margin-bottom: 20px;
`

export const Paragraph = styled.p `
text-align: center;
margin-bottom: 20px;
padding-left: 15px;
padding-right: 15px;

`

export const BtnWrap = styled.div `
display: flex;
gap: 20px;
`

export const Button = styled.button `
background: transparent;
border: 3px solid #c9e265;
border-radius: 8px;
padding: 6px;
color: #c9e265;
font-weight: bolder;
font-size: 15px;

&:hover {
    background: #c9e265;
    color: white;
    transition: all 0.2s ease-in-out;
}
`

export const CloseModalButton = styled(MdClose) `
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
color: white,
`