import CovidModel from './../icons/covid19-modeling-logo.png'
import HyperparameterOptimization from './../icons/hyperparameter-optimization-logo.png'
import SvmVsCnn from './../icons/svm-vs-cnn-logo.png'
import HSRProjects from './HSRProjects';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className="content-body">
            <a target="_blank" rel="noreferrer" href="https://hsr.health/">
                <h1 className="title-with-link">HSR.health</h1>
            </a>
            <HSRProjects />
            <h1>Binghamton University</h1>
            <ProjectItem
                title="Neural Network Hyperparamter Optimization with Evolutionary Algorithms"
                icon={HyperparameterOptimization}
                href="https://github.com/cwolosh1/hyperparameter-optimization"
                buttonName="View on GitHub"
            >
                <p>
                    Neural networks permeate throughout the biggest technology companies in existence, and their rapid development shows they are a powerful a tool for solving modern, data driven problems. The first goal of this project to provide a clear and accessible elementary outline of essential topics in machine learning and neural networks. The second is to provide a comprehensive report of the research itself.                    
                </p>
                <p>
                    The project aims to address the problems behind searching for optimal hyperparameters in a Deep Neural Network through the use of genetic algorithms. The methods are outlined in the report in a way that is educational and digestible for those who are unfamiliar with core concepts, and to demonstrate my knowledge on the subject for those who are familiar.
                </p>
            </ProjectItem>
            <ProjectItem
                title="Support Vector Machines vs. Deep Learning on Emotion Classification"
                icon={SvmVsCnn}
                href="https://github.com/cwolosh1/emotion-classification"
                buttonName="View on GitHub"
            >
                <p>
                    The goal of this project is to assess and examine the robustness of traditional machine learning algorithms when compared to contemporary deep learning architectures. This comparison especially extends to when noise is introduced into the system. For this project, we implemented a Support Vector Machine (SVM), a Multi-layer Perceptron (MLP), and a Convolutional Neural Network (CNN) to classify between 7 different emotions from labeled speech data.
                </p>
                <p>
                    These data come from the Toronto Emotion Speech Set (TESS), and the specific emotions are anger, disgust, fear, happiness, neutral, pleasant surprise, and sadness. We used MFCC preprocessing to extract phonetic features in a matrix form. This project demonstrates the importance of experimenting with many types of machine learning architectures to deduce what is the most robust option for each problem.
                </p>
            </ProjectItem>
            <ProjectItem
                title="COVID-19 Network Epidemic Modeling and Analysis"
                icon={CovidModel}
                href="https://github.com/cwolosh1/social-distancing"
                buttonName="View on GitHub"
            >
                <p>
                    The goal of this project was to create a comprehensive pandemic simulation that captures the key assumptions of standard disease spread models while adding its own assumptions to additionally model social distancing in the population. Thousands of simulations were conducted systematically across a set of differing model parameters. The resulting data from these simulations were then analyzed and inferred upon to inform the best course of actions of individuals and governments eraly in the COVID-19 Pandemic. My results revealed and emphasized the importance of reacting early, and reacting strongly with respect to limiting social contact. Governments must be cautious in their endeavors to reopen the economy, but with an informed mindset and proper mitigation infrastructure, can do so without causing a second wave outbreak.
                </p>
            </ProjectItem>
            <ProjectItem
                title="Machine Learning Abstract Maker"
                icon=""
                href="https://devpost.com/software/abstract-abstract-maker"
                buttonName="View on Devpost"
            >
                <p>
                    This project uses a database of scientific abstracts provided by H1 Insights, a sponsor of the 2019 HackBU Hackathon! I implemented an n-th order Markov Chain in order to generate a scientific abstract from a training set of over 400,000 peer reviewed abstracts. This project won two awards at the 2019 HackBU Hackathon: Best use of H1 Insights' Dataset and Funniest Hack. More project details and source code can be found on Devpost.
                </p>
            </ProjectItem>
        </div>
    );
}
 
export default Projects;