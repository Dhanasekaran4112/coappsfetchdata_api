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
          <p>Name : {data.name.title} {data.name.first}{data.name.last}</p>
          <p>Gender : {data.gender}</p>
          <p>Email : {data.gender}</p>
        </>
          ))
      }
    </div>
  );
}

export default App;
