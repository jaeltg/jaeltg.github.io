import React, {useRef} from 'react'
import { useSpring, animated } from 'react-spring'
import { Background, ModalWrapper, ModalContent, ModalImg, CloseModalButton, Paragraph, Title, Button, BtnWrap } from './WorkPopupElements'

const WorkPopup = ({image, title, explanation, visible, link1, link2, tech, showModal, setShowModal}) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = event => {
        if(modalRef.current === event.target) {
            setShowModal(false);
        }
    }

    return (
        <>
        {showModal ? 
            <Background ref={modalRef} onClick={closeModal}> 
                <animated.div style={animation}>
                <ModalWrapper>
                    <ModalImg src={image} alt='Yoga'/>
                    <ModalContent>
                        <Title>{title}</Title>
                        <Paragraph>{explanation}</Paragraph>
                        <Paragraph>Technologies: {tech}</Paragraph>
                        <BtnWrap>
                            <Button hidden={visible} href={link2} target="_blank">View App</Button>
                            <Button href={link1} target="_blank">View Code</Button>
                        </BtnWrap> 
                    </ModalContent>
                    <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prevValue => !prevValue)}/>
                </ModalWrapper>
                </animated.div>
            </Background>
         : null}
        </>
    )
}

export default WorkPopup;
