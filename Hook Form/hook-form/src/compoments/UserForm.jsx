import React, { useState } from 'react';

const UserForm = (props) => {
    const [Firstname, setFirstname] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmepassword, setConfirmepassword] = useState("");
    // const [mess1,setMess1]=useState("")

 

    return (
     <div>
        
        <form >
            <div>
                <label>Firstname: </label>
                <input type="text" value={Firstname} onChange={(e) => setFirstname (e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={LastName} onChange={(e) => setLastName (e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                <label>confirme Password: </label>
                <input type="password" value={confirmepassword} onChange={(e) => setConfirmepassword(e.target.value)} />

            </div>


          



        
        </form >
<div>
    <br />
  
    Firstname:{Firstname} <br />
    Email : {email} <br />
    LastName :{LastName}<br />
    password :{password} <br />
    confirmepassword:{confirmepassword}

</div>

        </div>


       


    );
};

export default UserForm;
