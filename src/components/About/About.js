import {Button} from '../ButtonElement'
import {AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './AboutElements'

const About = () => {
    return(
        <>
         <AboutContainer id='about'>
            <AboutWrapper>
              <AboutRow>
                  <Column1>
                      <TextWrapper>
                          <Heading>About Me</Heading>
                          <Subtitle>I'm a new developer with a previous background on economics</Subtitle>
                          <Subtitle>Languages</Subtitle>
                          <p>JavaScript, Python, Java, HTML5, CSS</p>
                          <Subtitle>Technologies</Subtitle>
                          <p>React, Vue, Spring, Express, MongoDB, Flask, PostgreSQL</p>
                          <Subtitle>
                          Download CV
                          </Subtitle>
                          <BtnWrap>
                              <Button to='contact' 
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              dark={true} 
                              primary={false}>Say Hello!</Button>
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