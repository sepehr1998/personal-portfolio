// import {Link} from "react-router-dom";
// import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faGears, faTrophy} from "@fortawesome/free-solid-svg-icons";
import './portfolio.css'

function Portfolio(){
    // const selectedSection = useState("projects")

/*
    const projects = [
        { id: 1, name: 'Project One', description: 'This is project one.' },
        { id: 2, name: 'Project Two', description: 'This is project two.' },
        { id: 3, name: 'Project Three', description: 'This is project three.' },
    ];
*/

    return(
        <div className="container">
            <h2 className="text-gradient text-center">My Portfolio</h2>
            <div className="row justify-content-center mt-5">
                <div className="col col-3 mx-auto">
                    <button className="text-center section-selector-button">
                        <FontAwesomeIcon icon={faCode}/> Projects
                    </button>
                </div>
                <div className="col col-3 mx-auto">
                    <button className="text-center section-selector-button">
                        <FontAwesomeIcon icon={faTrophy}/> Certificates
                    </button>
                </div>
                <div className="col col-3 mx-auto">
                    <button className="text-center section-selector-button">
                        <FontAwesomeIcon icon={faGears}/> Tech Stacks
                    </button>
                </div>
            </div>
{/*            <div>
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link to={`/portfolio/${project.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>*/}
        </div>
    )
}

export default Portfolio;
