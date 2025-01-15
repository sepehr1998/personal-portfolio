import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowsToDot, faArrowUpRightFromSquare, faCode, faFileZipper} from "@fortawesome/free-solid-svg-icons"
import SepehrImage from '../../assets/images/sepehr.jpg'
import './about.css'
import InfoCard from '../../components/InfoCard'

function About() {
    return (
        <div className="container py-4">
            <div className="text-center mb-4">
                <h2 className="text-gradient">About Me</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faArrowsToDot} className="mx-3 text-primary-emphasis" />
                    <p className="m-0">Transforming ideas into digital experiences!</p>
                    <FontAwesomeIcon icon={faArrowsToDot} className="mx-3 text-primary-emphasis" />
                </div>
            </div>

            <div className="row align-items-center mt-5">
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <h2 className="text-gradient">Hello, I'm</h2>
                    <h2>Sepehr Samadi</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages.
                    </p>
                    <div className="d-flex mt-4">
                        <button className="button-gradient pe-3 py-2">
                            <FontAwesomeIcon icon={faFileZipper} className="mx-2" />
                            Download CV
                        </button>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                    <img src={SepehrImage} alt="My Image" className="circular-image" />
                </div>
            </div>
            <div className="row mt-5 justify-content-between">
                <div className="col-12 col-md-4">
                    <InfoCard>
                        {{
                            topLeft: <FontAwesomeIcon icon={faCode}/>,
                            topRight: <h2>20</h2>,
                            bottomLeft: <h4>Total Projects</h4>,
                            bottomRight: <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>,
                        }}
                    </InfoCard>
                </div>

                <div className="col-12 col-md-4">
                    <InfoCard>
                        {{
                            topLeft: <FontAwesomeIcon icon={faCode}/>,
                            topRight: <h2>20</h2>,
                            bottomLeft: <h4>Total Projects</h4>,
                            bottomRight: <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>,
                        }}
                    </InfoCard>
                </div>

                <div className="col-12 col-md-4">
                    <InfoCard>
                        {{
                            topLeft: <FontAwesomeIcon icon={faCode}/>,
                            topRight: <h2>20</h2>,
                            bottomLeft: <h4>Total Projects</h4>,
                            bottomRight: <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>,
                        }}
                    </InfoCard>
                </div>
            </div>
        </div>
    )
}

export default About
