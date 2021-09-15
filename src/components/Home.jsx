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
                <p>
                    I'm working hard to get my website fully operational.
                    Many pages are incomplete, so for the time being, please
                    enjoy this landing page, and keep checking back for more
                    content coming soon!
                </p>
            </div>
        </div>
    );
}
 
export default Home;