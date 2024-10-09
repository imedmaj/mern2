import logo from './logo.svg';
import React from 'react';
import  { useEffect, useState } from 'react';
import './App.css';
import Display from './compoments/Display';







function App() {
  const  [color,setColor] = useState([]);
  const  [newcolor,setNewcolor] = useState('');
  console.log(color)
  
  
  const creatnewcolor= (e) => {
      e.preventDefault()
      const newPerson = {
        
          newcolor
      }
      
      setColor([...color,newcolor])
  
  }
  
  
    return (
      <div>
      <form onSubmit={creatnewcolor}>
      <label>Color: </label>
      <input type="text" onChange={(e) => { setNewcolor(e.target.value) }}/>
      <button > Add</button>
      
      
      </form>
      
      <Display color={color}/>
      
          </div>
          
      );
}

export default App;