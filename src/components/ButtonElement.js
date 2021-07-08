import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Button = styled(LinkS)`
border-radius: 8px;
background: ${({primary}) => (primary ? '#c9e265' : '#EBEBEB')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({primary}) => (primary ? 'black' : '#A3A3A3')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
font-weight: bold;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
margin-right: 20px;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#A3A3A3' : '#A3A3A3')};
    color: ${({primary}) => (primary ? 'white' : 'white')};

}
`
