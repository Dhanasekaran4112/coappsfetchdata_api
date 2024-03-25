import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';

function App() {

  const[Data, setData]=useState([])

  const getdata=async()=>{
    const response=await axios.get('https://randomuser.me/api/')
    setData(response.data.results)
  }

  useEffect(()=>{
    getdata();
  },[])

  return (
    <div>
      {Data.map((data,index)=>(
        <>
          <p><b>Name</b> : {data.name.title} {data.name.first}{data.name.last}</p>
          <p><b>Gender</b> : {data.gender}</p>
          <p><b>Email</b> : {data.email}</p>
          <p><b>City</b>: {data.location.city}</p>
          <p><b>State</b> : {data.location.state}</p>
          <p><b>Country </b>: {data.location.country}</p>
          <p><b>Postcode</b> : {data.location.postcode}</p>
        </>
          ))
      }
    </div>
  );
}

export default App;
