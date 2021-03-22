import React, { useEffect, useState } from "react";
import "./HomePage.css";
import transportInfo from "../FakeData/FakeData.json";
import Transports from "../Transports/Transports";

const HomePage = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => setInfo(transportInfo), []);

  return (
    <div className="home">
      <h1>Total transport {info.length}</h1>
      <div className="home-transports-container row d-flex justify-content-center align-items-center" id="transport-card">
      {info.map((singleTransport) => (
        < Transports
        singleTransport={singleTransport}
        key={singleTransport.id} />
      ))}
      </div>
    </div>
  );
};

export default HomePage;
