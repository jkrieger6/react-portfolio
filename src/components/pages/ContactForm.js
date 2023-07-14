import React, { useState } from "react";

const styles = {
    formStyles: {
        width: "50%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        border: "5px solid black",
},
    h1Styles: {
        textAlign: "center",
        color: "ivory"
},
divStyles: {
    width: "100%",
    textAlign: "center",
},
};

// Function to render error message if email is not valid
export default function ContactForm() {
    const [ emailError, setEmailError ] = useState(false)
    const handleBlur = (e) => {
        const name = e.target.name;
        if (name === "email" && !e.target.value){
            setEmailError(true)
        }
    } 

    // Function to render error message if name field is left blank
    const [ nameError, setNameError ] = useState(false)
    const handleNameBlur = (e) => {
        const name = e.target.name;
        if (name === "name" && !e.target.value){
            setNameError(true)
        }
    }

    // Function to render error message if message field is left blank
    const [ messageError, setMessageError ] = useState(false)
    const handleMessageBlur = (e) => {
        const name = e.target.name;
        if (name === "message" && !e.target.value){
            setMessageError(true)
        }
    }

    return (
        <div>
            <h1 style={styles.h1Styles}>Contact Me</h1>
            <form style={styles.formStyles}>
                <div style={styles.divStyles} className="form-group">
                    <label for="FormControlInput1">Name</label>
                    <input name="name" type="name" onBlur={handleNameBlur} className="form-control" id="FormControlInput1" placeholder="Name" />
                    {
                        nameError && (
                            <span>Please provide your name.</span>
                        )
                    }
                </div>
                <div style={styles.divStyles} className="form-group">
                    <label for="FormControlInput2">Email address</label>
                    <input name="email" onBlur={handleBlur} type="email" className="form-control" id="FormControlInput2" placeholder="example@email.com"/>
                    {
                        emailError && (
                            <span>Please provide a valid email.</span>
                        )
                    }
                </div>
                <div style={styles.divStyles} className="form-group">
                    <label for="FormControlTextarea1">Message</label>
                    <textarea name="message" onBlur={handleMessageBlur} className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                    {
                        messageError && (
                            <span>Please provide a message.</span>
                        )
                    }
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
