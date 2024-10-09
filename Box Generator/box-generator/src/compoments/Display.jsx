import React from 'react'

const Display = (props) => {
    console.log(props.color)
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <div  style={ {backgroundColor:props.color} }></div>
         

            {
             
            props.color.map((color, i) => {
                return <div class="desplay" key={i} style={{ backgroundColor: color }}>
                       <h3>color</h3>
                </div>
            })
        } 

        </fieldset>
    )
}

export default Display