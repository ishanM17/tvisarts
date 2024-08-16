import { React, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import './ContactForm.css';

export default function ContactForm() {

    const today = new Date();
    const currentDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    const [input, setInput] = useState({
        date: currentDate,
        userName: "",
        email: "",
        mobile: "",
        subject: "",
        comment: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        console.log(input);
        fetch(
            "https://sheetdb.io/api/v1/rco7v07yf440c",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: [
                        input
                    ]
                })
            }
        )
            .then((res) => res.json())
            .then((data) => {
                emailjs.send(
                    'service_j5sbf0f',
                    'template_ld2q3zt',
                    {},
                    'OJY8PZqEYlw3tfGwB'
                )
                .then(() => {
                    setDisabled(false);
                    alert("Thank you for your enquiry. We will get in touch with you ASAP!");
                    navigate("/");
                })
                .catch((error) => {
                    setDisabled(false);
                    alert("Form saved, but failed to send email. Please try again.");
                });
            })
            .catch((error) => {
                setDisabled(false);
                alert("Your response was not submitted! Please try again.");
            });
    }

    return (
        <form className="contact-form" id="contactNav" onSubmit={handleSubmit}>
            <h2 className="heading-font mb-4" align="center"><u>Contact Us!</u></h2>
            <div className="mb-4">
                <label htmlFor="name" className="h4 para-font form-label">Name: <span style={{ color: "red" }}>*</span></label>
                <input
                    type="text"
                    id="name"
                    name="userName"
                    className="form-control form-control-lg"
                    value={input.userName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="h4 para-font form-label">Email: <span style={{ color: "red" }}>*</span></label>
                <input
                    type="email"
                    id="emial"
                    name="email"
                    className="form-control form-control-lg"
                    value={input.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    required />
            </div>
            <div className="mb-4">
                <label htmlFor="mobile-num" className="h4 para-font form-label">Mobile Number: <span style={{ color: "red" }}>*</span></label>
                <input
                    type="text"
                    id="mobile-num"
                    name="mobile"
                    className="form-control form-control-lg"
                    value={input.mobile}
                    onChange={handleChange}
                    placeholder="Enter your Mobile Number"
                    required />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="h4 para-font">Subject: <span style={{ color: "red" }}>*</span></label>
                <select class="form-select form-select-lg" name="subject" value={input.subject} onChange={handleChange}>
                    <option value="Classes for Children">Classes for Children</option>
                    <option value="Classes for Adults">Classes for Adults</option>
                    <option value="Commission Work">Commission Work</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="comment" className="h4 para-font form-label">Comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    className="form-control form-control-lg"
                    value={input.comment}
                    onChange={handleChange}
                    placeholder="Your Comments..."
                    rows="4" />
            </div>
            <div className="centered mt-5">
                <button type="submit" disabled={disabled} className={disabled ? "contact-form-button button-disabled" : "contact-form-button"}>
                    {disabled ? "..." : "Submit!"}
                </button>
            </div>
        </form>
    );
}