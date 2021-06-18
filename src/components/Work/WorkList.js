import {WorkContainer, WorkH1, WorkWrapper, WorkCard, WorkImage, WorkH2, WorkP} from './WorkListElements'
import Image1 from '../../images/contact.svg'
import Image2 from '../../images/contact.svg'
import Image3 from '../../images/contact.svg'

const WorkList = () => {
    return(
        <WorkContainer id='work'>
          <WorkH1>My Work</WorkH1>
          <WorkWrapper>
              <WorkCard>
                <WorkImage src={Image1}/>
                <WorkH2>Flex & Flow Yoga</WorkH2>
                <WorkP>explanation</WorkP>
              </WorkCard>
              <WorkCard>
                <WorkImage src={Image2}/>
                <WorkH2>Who Wants To Be A Millionaire</WorkH2>
                <WorkP>explanation</WorkP>
              </WorkCard>
              <WorkCard>
                <WorkImage src={Image3}/>
                <WorkH2>The Ward</WorkH2>
                <WorkP>explanation</WorkP>
              </WorkCard>
          </WorkWrapper>  
        </WorkContainer>
    )
}

export default WorkList;