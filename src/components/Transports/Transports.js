import React from "react";
import './Transports.css';

const Transports = (props) => {
  console.log(props);
  const {name, model, color, image} = props.singleTransport;

  return (
      <div className="transport-container">
          <div className="card transport-card col-md">
              <img src={image} className="card-img-top transport-img" alt=""></img>
          <div className="card-body text-center">
              <h5 class="card-title">{name}</h5>
              <p className="card-text">{model + " " + color}</p>
          </div>
          </div>
      </div>
  );
};

export default Transports;
