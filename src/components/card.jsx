import { React } from "react";
const Card = (props) => {
    return ( 
        <div className="card-body">
            <div className="card-date">
                <p>{props.date}</p>
            </div>
            <div className="card-icon">
                <span>{props.image}</span>
            </div>
            <div className="card-temp">
                <p>{props.temp}&deg;C</p>
                <p className="card-desc">{props.desc}</p>
            </div>
        </div>
     );
}
 
export default Card;