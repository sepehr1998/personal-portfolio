import {Link} from "react-router-dom";

function Portfolio(){
    const projects = [
        { id: 1, name: 'Project One', description: 'This is project one.' },
        { id: 2, name: 'Project Two', description: 'This is project two.' },
        { id: 3, name: 'Project Three', description: 'This is project three.' },
    ];

    return(
        <>
            <h2>My Portfolio</h2>
            <div>
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link to={`/portfolio/${project.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Portfolio;
