import { ReactNode } from "react";
import './infoCard.css'

interface ICardProps {
    children: {
        topLeft: ReactNode;
        topRight: ReactNode;
        bottomLeft: ReactNode;
        bottomRight: ReactNode;
    }
}

function InfoCard({ children }: ICardProps) {

    return(
        <>
            <div className="info-card">
                <div className="card-slot top-left">{children.topLeft}</div>
                <div className="card-slot top-right">{children.topRight}</div>
                <div className="card-slot bottom-left">{children.bottomLeft}</div>
                <div className="card-slot bottom-right">{children.bottomRight}</div>
            </div>
        </>
    )
}

export default InfoCard;
