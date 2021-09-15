import { Link } from 'react-router-dom';
import Headshot from './../images/headshot-1.jpg'


const Home = () => {
    return (
        <div className="content-body">
            <h1>Hi, I'm Christopher</h1>
            <img src={Headshot} alt="Headshot of me!"></img>
            <div className="paragraph-wrapper">
                <p>
                    I'm a Software Engineer with a strong background in Data
                    Science and Mathematics. I have an applied skillset building
                    end to end Machine Learning software using Python, Numpy,
                    Pandas, and scikit-learn.
                </p>
                <div className="button-container">
                <Link className="projects-button" to="/projects">View my Projects</Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo nisi animi blanditiis et excepturi consequuntur quis laborum maiores, id totam quae consequatur ratione veniam? Voluptate consectetur a aliquid distinctio.</p>
            </div>
        </div>
    );
}
 
export default Home;