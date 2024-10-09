import React from 'react'
import  { useEffect, useState } from 'react';
import { Navbar } from './Navbar';

export const FormWrapper = () => {

  const  [name,setName] = useState([]);

  return (
    <div>
      <Navbar   name={name}/>
<label>Name: </label>
<input type="text" onChange={(e) => { setName(e.target.value) }}/>


    </div>
  )
}
export default FormWrapper;
