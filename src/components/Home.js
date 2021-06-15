import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <>
            <h1>Hello! I'm Jael Tinman, a new software developer!</h1>
            <Link to="/my-work">
                <button>View My Work</button>
            </Link>
           
        </>
    )
}

export default Home;