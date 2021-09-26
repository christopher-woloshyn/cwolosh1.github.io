import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="content-body">
            <a target="_blank" href="https://hsr.health/">
                <h1 className="title-with-link">HSR.health</h1>
            </a>
            <div className="paragraph-wrapper">
                <h2>Flight Safety Index</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
                <h2>School Safety Index</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
                <h2>Economic Risk Index</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
                <h2>Business Risk Index</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
            </div>
            <h1>Binghamton University</h1>
            <div className="paragraph-wrapper-with-button">
                <h2>Neural Network Hyperparamter Optimization with Evolutionary Algorithms</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
                <div className="button-container">
                    <a
                        className="projects-button"
                        target="_blank"
                        href="https://github.com/cwolosh1/hyperparameter-optimization"
                    >
                        View on GitHub
                    </a>
                </div>
                <h2>Support Vector Machines vs. Deep Learning on Speech Emotion Classification</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
                <div className="button-container">
                    <a
                        className="projects-button"
                        target="_blank"
                        href="https://github.com/cwolosh1/emotion-classification"
                    >
                        View on GitHub
                    </a>
                </div>
                <h2>COVID-19 Network Epidemic Modeling and Analysis</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem iste quidem et aliquam alias sit a dolore tenetur voluptatibus magnam molestias atque doloremque est, dolores possimus consequatur aut eaque.</p>
                <div className="button-container">
                    <a
                        className="projects-button"
                        target="_blank"
                        href="https://github.com/cwolosh1/social-distancing"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;