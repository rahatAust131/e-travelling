import React, { useState } from "react";
import './SearchPlace.css';


const SearchPlace = () => {

  // state of user
  const [user, setUser] = useState({
    name : '',
    email : '',
    from : '',
    to : ''
  });

  // handling form or field blur
  const handleBlur = (e) => {
    let isFieldValid = true;
    // source validation
    if (e.target.name === "from") {
      // isFieldValid = /\[a-zA-Z ]*$.test(e.target.value);
    }
    // destination validation
    if (e.target.name === "to") {
      // isFieldValid = /\[a-zA-Z ]*$.test(e.target.value);
    }
    // input field validation
    if (isFieldValid) {
      const validUser = { ...user };
      validUser[e.target.name] = e.target.value;
      console.log("valid user", validUser);
      setUser(validUser);
    }
  };

  const handleSubmit = (e) => {
    console.log('submitting');
    e.preventDefault();
  };

  return (
    <div className="search-place-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="from">Pick From</label>
          <input className="form-row" type="text" name="from" id="" required onBlur={handleBlur}/>
          <label htmlFor="to">Pick To</label>
          <input className="form-row" type="text" name="to" id="" required onBlur={handleBlur}/>
          <input type="submit" className="btn btn-secondary" placeholder="Search" />
        </form>  
      <div>
          <img src="" alt=""/>
      </div>
    </div>
  );
};

export default SearchPlace;
