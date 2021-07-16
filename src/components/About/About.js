import {Button} from '../ButtonElement'
import {Icon, AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Heading, Intro, Subtitle, Par, BtnWrap, ImgWrap, Img} from './AboutElements'
import {SiFlask, SiPython, SiJinja, SiJava, SiJavascript, SiSpring, SiMongodb, SiPostgresql, SiCss3} from 'react-icons/si'
import {FaVuejs, FaReact, FaNodeJs, FaHtml5} from 'react-icons/fa'

const About = () => {
    return(
        <>
         <AboutContainer id='about'>
            <AboutWrapper>
              <AboutRow>
                  <Column1>
                      <TextWrapper>
                          <Heading>About Me</Heading>
                          <Intro>I'm a new software developer who has always been passionate about creating! Before finding my true calling I worked as a economics consultant. I am ready to take on new challenges involving new technologies!</Intro>
                          <Subtitle>Languages</Subtitle>
                          <Par>
                            <Icon>
                                <SiJavascript/> JavaScript
                            </Icon>
                            <Icon>
                                <SiJava/> Java
                            </Icon>
                            <Icon>
                                <SiPython/> Python
                            </Icon>
                            <Icon>
                                <FaHtml5/> HTML5
                            </Icon>
                            <Icon>  
                                <SiCss3/> CSS
                            </Icon>  
                          </Par>
                          <Subtitle>Technologies</Subtitle>
                          <Par>
                            <Icon>
                                <FaReact/> React
                            </Icon>
                            <Icon>   
                                <FaVuejs/> Vue
                            </Icon>
                            <Icon>   
                                <FaNodeJs/> Node.js
                            </Icon>
                            <Icon>   
                                <SiFlask/> Flask
                            </Icon> 
                            <Icon> 
                                <SiJinja/> Jinja
                            </Icon> 
                            <Icon>  
                                <SiSpring/> Spring
                            </Icon> 
                            <Icon> 
                                <SiMongodb/> MongoDB
                            </Icon> 
                            <Icon> 
                                <SiPostgresql/> PostgreSQL
                            </Icon> 
                          </Par>
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