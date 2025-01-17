import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './social-buttons-styles.css'

function SocialButtons() {
    return(
        <div className="container">
            <h1 className="text-gradient mb-5">
                Connect With Me
            </h1>

            <button
                className="btn linkedin-btn w-100 mb-3 py-3"
                onClick={() => window.open('https://www.linkedin.com/in/sepehr-samadi/', '_blank')}>
                <FontAwesomeIcon icon={faLinkedin}/> LinkedIn
            </button>

            <button
                className="btn github-btn w-100 py-3"
                onClick={() => window.open('https://www.github.com/sepehr1998/', '_blank')}>
                <FontAwesomeIcon icon={faGithub}/> GitHub
            </button>
        </div>
    )
}

export default SocialButtons;
