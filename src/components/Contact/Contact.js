import {Button} from '../ButtonElement'
import {AiOutlinePhone, AiOutlineLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {ContactContainer, ContactWrapper, ContactRow, Column1, Column2, TextWrapper, Heading, Subtitle, Icon, BtnWrap, ImgWrap, Img} from './ContactElements'

const Contact = () => {
    return(
        <>
         <ContactContainer id='contact'>
            <ContactWrapper>
              <ContactRow>
                <Column1>
                    <ImgWrap>          
                        <Img src={require('../../images/contact.svg').default} alt='Jael Tinman'/>
                    </ImgWrap>
                </Column1>
                <Column2>
                    <TextWrapper>
                        <Heading>Contact Me</Heading>
                        <Subtitle href="tel:+447947373920"> 
                        <Icon>
                            <AiOutlinePhone/> 
                        </Icon>
                        (+44) 7947 373920
                        </Subtitle>
                        <Subtitle href="mailto:jtin3095@gmail.com">
                        <Icon>
                            <HiOutlineMail/> 
                        </Icon>
                        jtin3095@gmail.com
                        </Subtitle>
                        <Subtitle href="https://www.linkedin.com/in/jael-tinman-grunfeld/" target="_blank">
                        <Icon>
                            <AiOutlineLinkedin/> 
                        </Icon>
                        /jael-tinman-grunfeld
                        </Subtitle>
                        <Subtitle href="https://github.com/jaeltg" target="_blank">
                        <Icon>
                            <FiGithub/> 
                        </Icon>
                        /jaeltg
                        </Subtitle>
                        <BtnWrap>
                            <Button>Download CV</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column2>
              </ContactRow>  
            </ContactWrapper>
         </ContactContainer>
        </>

    )
}

export default Contact;