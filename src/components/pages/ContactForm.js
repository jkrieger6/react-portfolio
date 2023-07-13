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

export default function ContactForm() {
    const [ emailError, setEmailError ] = useState(false)
    const handleBlur = (e) => {
        const name = e.target.name;
        if (name === "email" && !e.target.value){
            setEmailError(true)
        }
    } 
    return (
        <div>
            <h1 style={styles.h1Styles}>Contact Me</h1>
            <form style={styles.formStyles}>
                <div style={styles.divStyles} className="form-group">
                    <label for="FormControlInput1">Name</label>
                    <input type="name" className="form-control" id="FormControlInput1" placeholder="Name" />
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
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
