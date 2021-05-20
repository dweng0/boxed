
export interface CardProps {
    punchNumber: number
};

const Card: React.FunctionComponent<CardProps> = (props) => { 
    return (
           <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center" style={{fontSize: "10rem"}}>{props.punchNumber}</h2>
                </div>
            </div>
    )
}
export default Card