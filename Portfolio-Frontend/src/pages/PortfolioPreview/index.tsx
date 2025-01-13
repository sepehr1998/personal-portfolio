import { useParams } from 'react-router-dom'

function PortfolioPreview() {
    const { projectId } = useParams<{ projectId: string }>() // Explicitly type the parameter

    if (!projectId) {
        return <p>Project not found!</p>
    }

    const projects = [
        { id: 1, name: 'Project One', description: 'Detailed description of Project One.', moreInfo: 'More detailed information about Project One.' },
        { id: 2, name: 'Project Two', description: 'Detailed description of Project Two.', moreInfo: 'More detailed information about Project Two.' },
        { id: 3, name: 'Project Three', description: 'Detailed description of Project Three.', moreInfo: 'More detailed information about Project Three.' },
    ]

    const project = projects.find((p) => p.id === parseInt(projectId))

    if (!project) {
        return <p>Project not found!</p>
    }

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.moreInfo}</p>
        </div>
    )
}

export default PortfolioPreview
