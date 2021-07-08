import {WorkContainer, WorkH1, WorkWrapper, WorkCard, WorkImage, WorkH2, WorkP} from './WorkListElements'
import Image1 from '../../images/Flex1.png'
import Image2 from '../../images/Millionaire1.png'
import Image3 from '../../images/Ward2.png'

const WorkList = () => {
    return(
        <WorkContainer id='work'>
          <WorkH1>My Work</WorkH1>
          <WorkWrapper>
              <WorkCard>
                <WorkImage src={Image1}/>
                <WorkH2>Flex & Flow Yoga</WorkH2>
                <WorkP>App designed to help yoga studio admin staff to manage classes, members and bookings.</WorkP>
              </WorkCard>
              <WorkCard>
                <WorkImage src={Image2}/>
                <WorkH2>Who Wants To Be A Millionaire</WorkH2>
                <WorkP>A browser game mimicking the famous Game Show of the same name. The more answers you get correct the bigger the prize! If you get the answer wrong you could leave with nothing.</WorkP>
              </WorkCard>
              <WorkCard>
                <WorkImage src={Image3}/>
                <WorkH2>The Ward</WorkH2>
                <WorkP>A browser game paying homage to the NHS heroes and the difficult decisions they have to make everyday. The objective of the game is to try and cure as many patients as you can by assigning them to the right specialist.</WorkP>
              </WorkCard>
          </WorkWrapper>  
        </WorkContainer>
    )
}

export default WorkList;