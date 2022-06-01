import React from "react";
import { Link } from "react-router-dom";
import "./CalcCard.css";

function CalcCard(props) {
  return (
    <div className="col-6 col-md-3">
      <Link to={props.pageLink}>
        <div className="calculation-card text-center mb-3">
          <h1 className="calculation-card-title">{props.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default CalcCard;
