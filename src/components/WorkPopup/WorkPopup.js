import React from 'react'
import { Background, ModalWrapper, ModalContent, ModalImg, CloseModalButton, Paragraph, Title, Button, BtnWrap } from './WorkPopupElements'

const WorkPopup = ({image, title, explanation, visible,showModal, setShowModal}) => {
    return (
        <>
        {showModal ? 
            <Background>
                <ModalWrapper>
                    <ModalImg src={image} alt='Yoga'/>
                    <ModalContent>
                        <Title>{title}</Title>
                        <Paragraph>{explanation}</Paragraph>
                        <BtnWrap>
                            <Button visible={visible}>View App</Button>
                            <Button>View Code</Button>
                        </BtnWrap> 
                    </ModalContent>
                    <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prevValue => !prevValue)}/>
                </ModalWrapper>
            </Background>
         : null}
        </>
    )
}

export default WorkPopup;
