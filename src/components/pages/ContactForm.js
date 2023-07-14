import React, { useState } from "react";

const styles = {
    formStyles: {
        width: "75%",
        backgroundColor: "grey",
        color: "#9CF6F6",
        textAlign: "center",
        border: "5px solid black",
        margin: "auto",
        padding: "20px",
},
    h1Styles: {
        color: "#9CF6F6",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        padding: "20px"
},
divStyles: {
    width: "100%",
    textAlign: "center",
},
buttonStyles: {
    textAlign: "center",
    margin: "auto",
    backgroundColor: "#416788",
    color: "#9CF6F6",
    border: "3px solid black",
    padding: "10px",
    borderRadius: "10px",
},
    erorrStyles: {
        color: "#aa2e25",
        textAlign: "center",
        margin: "auto",
        padding: "10px",
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
                            <span style={styles.erorrStyles}>Please provide your name.</span>
                        )
                    }
                </div>
                <div style={styles.divStyles} className="form-group">
                    <label for="FormControlInput2">Email address</label>
                    <input name="email" onBlur={handleBlur} type="email" className="form-control" id="FormControlInput2" placeholder="example@email.com"/>
                    {
                        emailError && (
                            <span style={styles.erorrStyles}>Please provide a valid email.</span>
                        )
                    }
                </div>
                <div style={styles.divStyles} className="form-group">
                    <label for="FormControlTextarea1">Message</label>
                    <textarea name="message" onBlur={handleMessageBlur} className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                    {
                        messageError && (
                            <span style={styles.erorrStyles}>Please provide a message.</span>
                        )
                    }
                </div>
                <button style={styles.buttonStyles} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
