import React, { useEffect, useState } from 'react';

const UserForm = (props) => {
    const [Firstname, setFirstname] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmepassword, setConfirmepassword] = useState("");

    const [mess1, setMess1] = useState("*First Name is less than 2 characters");
    const [mess2, setMess2] = useState("*LastName is less than 2 characters");
    const [mess3, setMess3] = useState("*email is less than 5 characters");
    const [mess4, setMess4] = useState("*The passwords must be at least 8 characters");
    const [mess5, setMess5] = useState("");

    useEffect(() => {
        if (password !== confirmepassword) {
            setMess5("*The passwords is not match")
            console.log(password)
            console.log(confirmepassword)

        }
        else {
            setMess5("password matched")
        }

    }, [confirmepassword])

    useEffect(() => {

        if (Firstname.length >= 2) {
            setMess1("")
        }
    }, [Firstname])

    useEffect(() => {

        if (LastName.length >= 2) {
            setMess2("")
        }
    }, [LastName])
    useEffect(() => {
        if (email.length >= 5) {
            setMess3("")

        }

    }, [email])

    useEffect(() => {
        if (password.length >= 8) {
            setMess4("")

        }

    }, [password])


    return (
        <div>
            i have error with the confirmation he active after the next carcter

            <form >
                <div>
                    <label>Firstname: </label>
                    <input type="text" value={Firstname} onChange={(e) => (setFirstname(e.target.value))} />
                    <h6 className="red" >{mess1} </h6>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={LastName} onChange={(e) => (setLastName(e.target.value))} />
                    <h6 className="red" >{mess2} </h6>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => (setEmail(e.target.value))} />
                    <h6 className="red" >{mess3} </h6>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} />
                    <h6 className="red" >{mess4} </h6>
                </div>

                <div>
                    <label>confirme Password: </label>
                    <input type="password" onChange={(e) => (setConfirmepassword(e.target.value))} />
                    <h6 className="red" >{mess5} </h6>

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
