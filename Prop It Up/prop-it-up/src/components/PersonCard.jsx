
import React, { useState } from 'react';


const PersonCard = (props) => {
    const {firstName, age,color } = props;
    const [number, setnumber] = useState(props.age);
    const increm =()=>
    {
        setnumber(number+1)
    }
  
   

    return (
        <div>
            <h1>
               {props.firstName} 
            </h1>
                       <h2>age:{number}  </h2>
            <h3>hair color {color}</h3>
            <button onClick={increm}>click me</button>
          

        </div>
    );
}

export default PersonCard