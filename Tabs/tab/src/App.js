import logo from './logo.svg';
import './App.css';
import  { useEffect, useState } from 'react';
import Display from './compoments/Display';

function App() {

  const tab =[{num: 1,data :"my tabel data 1" },{num: 2,data :"my tabel data 2" },{num: 3 ,data :"my tabel data 3" }]
  return (
    <div>
   
    
    <Display tab={tab}/>
    
        </div>
        
    );
  
      
}


export default App;
