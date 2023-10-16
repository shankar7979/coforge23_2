import React, { Component, useState } from 'react';
//import React, { useState, Fragment, Component } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm1 = ({ setUser }) => {
  const [firstName, setFirstName] = useState('');
  const [userId, setUserId] = useState('');
  const [userShow, setUserShow] = useState(true);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (userId == '')
      alert('user id is blank')

    else if (firstName == '')
      alert('first name is blank')

    //if (!firstName) return;
    else {
      setUser({ firstName: firstName, userId: userId });
      //setUserShow(false);  // uncomment to display below 
      navigate('/login');  // uncomment to navigate to /login
    }
  }
  return (
    <div className="container">
      <div className="p-5 w-75  bg-info" style={{ marginLeft: '150px', marginTop: '100px', }}>
        <h1 style={{ marginLeft: '250px' }}>User Form</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label>Enter User Id</label>
            <input type="text"
              name="userId" onChange={(e) => setUserId(e.target.value)} value={userId}
              className="form-control mt-3"
            />
          </div>

          <div className="form-group mt-3">
            <label>Enter the Name</label>
            <input type="text"
              name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName}
              className="form-control mt-3"

            />

          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-primary mt-2' onClick={onSubmitHandler}>Submit</button>
            <button type="reset" className='btn btn-primary mt-2' style={{ 'marginLeft': '10px' }} >Cancel</button>
          </div>

          <div className="form-group mt-4" hidden={userShow}>
            {<p>"User Id : " {userId}</p>}
            {<p>"FirstName : " {firstName}</p>}
          </div>

        </form>
      </div>
    </div>
  )
}


//https://github.com/john-smilga/react-router-6-tutorial