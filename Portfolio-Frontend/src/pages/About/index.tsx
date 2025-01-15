import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsToDot, faFileZipper} from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-gradient">About Me</h2>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faArrowsToDot} className="mx-3 text-primary-emphasis"/>
                    <p className="m-0">Transforming ideas into digital experiences!</p>
                    <FontAwesomeIcon icon={faArrowsToDot} className="mx-3 text-primary-emphasis"/>
                </div>
            </div>
            <div className="d-flex flex-column w-50">
                <h2 className="text-gradient">Hello, I'm</h2>
                <h2>Sepehr Samadi</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                <div className="d-flex flex-row align-items-center">
                    <button className="button-gradient mw-50 me-3 pe-3 py-2">
                        <FontAwesomeIcon icon={faFileZipper} className="mx-3"/>Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;
