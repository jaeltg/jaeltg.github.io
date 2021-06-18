import styled from 'styled-components'

export const WorkContainer = styled.div `
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: white;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`

export const WorkWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const WorkCard = styled.div `
background: grey;
display: flex;
flex-direction: column;
justify-content: flex-start
align-items: center;
border-radius: 10px;
max-height: 340px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all o.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const WorkImage = styled.img `
height: 160px;
width: 290px;
margin-bottom: 10px;
`

export const WorkH1 = styled.h1 `
font-size: 2.5rem;
color: black;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2.0rem
}
`

export const WorkH2 = styled.h2 `
font-size: 1.0rem;
margin-bottom: 10px;
text-align: center;
`

export const WorkP = styled.p `
font-size: 1.0rem;
text-align: center;
`

