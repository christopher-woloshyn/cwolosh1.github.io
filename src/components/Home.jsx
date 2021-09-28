import { Link } from 'react-router-dom';
import Headshot from './../images/headshot-1.jpg'


const Home = () => {
    return (
        <div className="content-body">
            <h1>Hi, I'm Christopher</h1>
            <img src={Headshot} alt="Headshot of me!"></img>
            <div className="content-wrapper">
                <p>
                    I'm a Machine Learning Engineer with a strong background
                    in Data Science and Mathematics. I have an applied skillset
                    building end-to-end Machine Learning pipelines using Python,
                    NumPy, Pandas, and scikit-learn. As a hobbiest I am
                    passionate about graphic design and the principles of UI/UX 
                    and have been learning JavaScript, CSS, and React.js to 
                    turn my passion into action!
                </p>
                <div className="button-container">
                <Link className="projects-button" to="/projects">View my Projects</Link>
                </div>
                <p>
                    I'm working hard to get my website fully operational.
                    The interests page is still incomplete, so for the time
                    being, please enjoy what I already have built out, and keep
                    checking back for more content coming soon!
                </p>
            </div>
        </div>
    );
}
 
export default Home;