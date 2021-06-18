import {Button} from '../ButtonElement'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'

const Info = ({id, lightBg, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, dark, primary, img, alt, imgBig}) => {
    return(
        <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headLine}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrap>
                              <Button to='contact' 
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              dark={dark} 
                              primary={primary}>{buttonLabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                  </Column1>
                  <Column2>
                      <ImgWrap>
                          <Img src={img} alt={alt} imgBig={imgBig}/>
                      </ImgWrap>
                  </Column2>
              </InfoRow>  
            </InfoWrapper>
         </InfoContainer>
        </>

    )
}

export default Info;