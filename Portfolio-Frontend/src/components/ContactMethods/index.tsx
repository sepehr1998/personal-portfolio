import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./contact-methods.css";

function ContactMethods() {
    return (
        <div className="container">
            <h1 className="text-gradient mb-5">Connect With Me</h1>

            <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-3 text-primary-emphasis" />
                <p className="m-0">+358466412871</p>
            </div>

            <div className="d-flex align-items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="me-3 text-primary-emphasis" />
                <p className="m-0">samadisepehr@gmail.com</p>
            </div>

            <button
                className="btn linkedin-btn w-100 mb-3 py-3"
                onClick={() => window.open("https://www.linkedin.com/in/sepehr-samadi/", "_blank")}
            >
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                LinkedIn
            </button>

            <button
                className="btn github-btn w-100 py-3"
                onClick={() => window.open("https://www.github.com/sepehr1998/", "_blank")}
            >
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                GitHub
            </button>
        </div>
    );
}

export default ContactMethods;
