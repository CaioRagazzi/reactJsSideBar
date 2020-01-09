import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../app.css'

function Items() {

  useEffect(() => {
    axios.get('https://fortnite-api.theapinetwork.com/items/list').then(data => {
      console.log(data);      
    })
  }, [])

  return (
    <div>
        <h1 className="container-center">Items Page</h1>
    </div>
  );
}

export default Items;
