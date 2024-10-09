import  { useEffect, useState } from 'react';


const Display = (props) => {

    const  [myData,setMyData] = useState('hello');

   
        const onClickHandler = (e) => {
            alert("You have clicked the button");
            setMyData(props.data)
        }
    
      

 
  
    
    
 

 return(
    <fieldset>
<legend>tab filed</legend>
  {
       props.tab.map(tap=>{
        
        return(

            <button  onClick={ ()=>setMyData(tap.data) }> Tab  {tap.num}</button>
          

        )
    })
    
  }

  <div>

  {myData}
  </div>
 
 </fieldset>

)

}

export default Display