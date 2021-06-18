import Video from '../../videos/HomePageBackground.mp4'
import { HomeContainer, HomeContent, HomeH1, HomeBtnWrapper, HomeBg, VideoBg} from './HomeElements';
import {Button} from '../ButtonElement'

const Home = () => {
    return(
        <HomeContainer id='home'>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBg>
            <HomeContent>
                <HomeH1>
                    Hello! I'm <br/> <span className="name">Jael Tinman</span>
                    <br/> a new software developer!
                </HomeH1>
                <HomeBtnWrapper>
                    <Button to='work' primary='true' dark='true'>
                        View My Work
                    </Button> 
                </HomeBtnWrapper> 
            </HomeContent>        
        </HomeContainer>
    )
}

export default Home;