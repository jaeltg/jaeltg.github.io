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
                <WorkP>App designed to help yoga studio admin staff to manage classes, members and bookings.</WorkP>
              </WorkCard>
              <WorkPopup {...info1} showModal={showModal1} setShowModal={setShowModal1}/>
              <WorkCard  onClick={openModal2}>
                <WorkImage src={Image2}/>
                <WorkH2>Who Wants To Be A Millionaire</WorkH2>
                <WorkP>A browser game mimicking the famous Game Show of the same name. The more answers you get correct the bigger the prize! If you get the answer wrong you could leave with nothing.</WorkP>
              </WorkCard>
              <WorkPopup {...info2} showModal={showModal2} setShowModal={setShowModal2}/>
              <WorkCard onClick={openModal3}>
                <WorkImage src={Image3}/>
                <WorkH2>The Ward</WorkH2>
                <WorkP>A browser game paying homage to the NHS heroes and the difficult decisions they have to make everyday. The objective of the game is to try and cure as many patients as you can by assigning them to the right specialist.</WorkP>
              </WorkCard>
              <WorkPopup {...info3} showModal={showModal3} setShowModal={setShowModal3}/>
          </WorkWrapper>  
        </WorkContainer>
    )
}

export default WorkList;