import React from "react";
import "./Transports.css";
import { Link } from "react-router-dom";

const Transports = (props) => {
  const { name, model, color, image, id, count, amount } = props.singleTransport;
  console.log(name, id, count, amount);

  return (
      <Link to={`/${id}`} className="transport-container">
      <div className="card transport-card col-sm">
        <img src={image} className="card-img-top transport-img" alt=""></img>
        <div className="card-body text-center">
          <h5 class="card-title">{name}</h5>
          <p className="card-text">{model + " " + color}</p>
        </div>
        </div>
      </Link>

  );
};

export default Transports;
