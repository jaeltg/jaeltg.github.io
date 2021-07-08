import {Button} from '../ButtonElement'
import {AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Heading, Intro, Subtitle, Par, BtnWrap, ImgWrap, Img} from './AboutElements'

const About = () => {
    return(
        <>
         <AboutContainer id='about'>
            <AboutWrapper>
              <AboutRow>
                  <Column1>
                      <TextWrapper>
                          <Heading>About Me</Heading>
                          <Intro>I'm a new developer with a previous background on economics</Intro>
                          <Subtitle>Languages</Subtitle>
                          <Par>JavaScript, Python, Java, HTML5, CSS</Par>
                          <Subtitle>Technologies</Subtitle>
                          <Par>React, Vue, Spring, Express, MongoDB, Flask, PostgreSQL</Par>
                          <BtnWrap>
                              <Button to='contact' 
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              dark={true} 
                              primary={false}>Say Hello!</Button>
                              <Button>Download CV</Button>
                          </BtnWrap>
                      </TextWrapper>
                  </Column1>
                  <Column2>
                      <ImgWrap>
                         <picture>
                            <source media="(max-width: 768px)" srcset={require('../../images/JaelSmall.png').default}/>                       
                            <Img src={require('../../images/Jael.JPG').default} alt='Jael Tinman'/>
                         </picture>
                      </ImgWrap>
                  </Column2>
              </AboutRow>  
            </AboutWrapper>
         </AboutContainer>
        </>

    )
}

export default About;