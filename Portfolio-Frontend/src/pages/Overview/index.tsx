import Typewriter from 'typewriter-effect';
import developerImage from '../../assets/images/development.png';
import './overview.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Overview() {
    const techStacks = ['Vue', 'React', 'Angular']
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-8">
                    <h1>Frontend</h1>
                    <h1 className="text-gradient">Developer</h1>
                    <div className="d-flex flex-row align-items-center display-6">
                        <Typewriter
                            options={{
                                strings: techStacks,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <p className="my-0 mx-1">Developer</p>
                    </div>
                    <br/>
                    <p>Experienced frontend developer with +8 years of experience</p>
                    <div className="d-flex flex-row align-items-center mt-4">
                        <button className="glow-button me-4">
                            <FontAwesomeIcon
                                icon={faComputer}
                                className="me-3"
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}/>Projects
                        </button>
                        <button className="glow-button">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="me-3"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            />Contact
                        </button>
                    </div>

                    <div className="d-flex flex-row align-items-center mt-5">
                        <button
                            className="glow-button me-4 bg-secondary bg-opacity-25"
                            onClick={() => window.open('https://www.linkedin.com/in/sepehr-samadi/', '_blank')}>
                            <FontAwesomeIcon icon={faLinkedin} className="text-light"/>
                        </button>
                        <button
                            className="glow-button bg-secondary bg-opacity-25"
                            onClick={() => window.open('https://www.github.com/sepehr1998/', '_blank')}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </button>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 text-center text-md-end">
                    <img src={developerImage} alt="web development" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Overview;
