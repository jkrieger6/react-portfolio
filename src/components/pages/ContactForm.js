import React, { useState } from "react";

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
            <h1>Contact Me</h1>
            <form>
                <div className="form-group">
                    <label for="FormControlInput1">Name</label>
                    <input type="name" className="form-control" id="FormControlInput1" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label for="FormControlInput2">Email address</label>
                    <input name="email" onBlur={handleBlur} type="email" className="form-control" id="FormControlInput2" placeholder="example@email.com"/>
                    {
                        emailError && (
                            <span>Please provide a valid email.</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label for="FormControlTextarea1">Message</label>
                    <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
