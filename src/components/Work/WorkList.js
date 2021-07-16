import {WorkContainer, WorkH1, WorkWrapper, WorkCard, WorkImage, WorkH2, WorkP} from './WorkListElements'
import Image1 from '../../images/Flex1.png'
import Image2 from '../../images/Millionaire1.png'
import Image3 from '../../images/Ward2.png'
import {useState} from 'react'
import WorkPopup from '../WorkPopup/WorkPopup'
import { info1, info2, info3 } from '../WorkPopup/Data'

const WorkList = () => {

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)

    const openModal1 = () => {
      setShowModal1(prevValue => !prevValue)
    }
    const openModal2 = () => {
      setShowModal2(prevValue => !prevValue)
    }
    const openModal3 = () => {
      setShowModal3(prevValue => !prevValue)
    }

    return(
        <WorkContainer id='work'>
          <WorkH1>My Work</WorkH1>
          <WorkWrapper>
              <WorkCard onClick={openModal1}>
                <WorkImage src={Image1}/>
                <WorkH2>Flex & Flow Yoga</WorkH2>
              </WorkCard>
              <WorkPopup {...info1} showModal={showModal1} setShowModal={setShowModal1}/>
              <WorkCard  onClick={openModal2}>
                <WorkImage src={Image2}/>
                <WorkH2>Who Wants To Be A Millionaire</WorkH2>
              </WorkCard>
              <WorkPopup {...info2} showModal={showModal2} setShowModal={setShowModal2}/>
              <WorkCard onClick={openModal3}>
                <WorkImage src={Image3}/>
                <WorkH2>The Ward</WorkH2>
              </WorkCard>
              <WorkPopup {...info3} showModal={showModal3} setShowModal={setShowModal3}/>
          </WorkWrapper>  
        </WorkContainer>
    )
}

export default WorkList;