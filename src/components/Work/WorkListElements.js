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
background: #c9e265;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height: 380px;
width: 290px;
max-height: 380px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all o.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 1000px) {
    height: 310px;
}

@media screen and (max-width: 768px) {
    height: 310px;
}
`

export const WorkImage = styled.img `
height: 160px;
width: 290px;
margin-bottom: 10px;
border-radius: 8px;
-webkit-filter: grayscale(100%);
filter: grayscale(100%);

&:hover {
transition: all 0.2s ease-in-out;
-webkit-filter: grayscale(0%);
filter: grayscale(0%);
   
}
`

export const WorkH1 = styled.h1 `
font-size: 2.5rem;
color: black;
margin-bottom: 64px;

@media screen and (max-width: 1000px) {
    margin-bottom: 40px
}

@media screen and (max-width: 768px) {
    margin-bottom: 40px
}

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
padding: 8px;

@media screen and (max-width: 1000px) {
    font-size: 0.85rem
}

@media screen and (max-width: 768px) {
    font-size: 0.85rem
}
`

