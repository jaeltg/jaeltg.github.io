import {Link} from 'react-router-dom';
import { HomeContainer, HomeContent, HomeH1, HomeBtnWrapper} from './HomeElements';
import {Button} from '../ButtonElement'

const Home = () => {
    return(
        <HomeContainer>
        <HomeContent>
            <HomeH1>
                Hello! I'm Jael Tinman, a new software developer!
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