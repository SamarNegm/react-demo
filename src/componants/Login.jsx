import React from "react";
import { useState, useEffect } from 'react';
import validator from 'validator'
export default function Login() {
    let [email, uname, password] = ['', '', ''];
    const [emailError, setEmailError] = useState('');
    let emailChange = (e) => {

        email = e.target.value;
        e.target.style = "border-color:#8D8DAA"
    }
    let unameChange = (e) => {
        console.log(e.target.value);
        uname = e.target.value;
        if (uname.length < 3)
            e.target.style = "border-color:red"
        else
            e.target.style = "border-color:#8D8DAA"

    }
    let passwordChange = (e) => {

        password = e.target.value
        if (password.length < 6) {
            e.target.style = "border-color:red"
        }
        else
            e.target.style = "border-color:#8D8DAA"
    }
    let IsValid = () => {
        console.log("uname:" + uname + " password: " + password + " Email : " + email);
        if (!validator.isEmail(email)) {

            setEmailError('Enter valid Email!')
        }
        else
            setEmailError('')

    }
    return (

        <div className="col-4" style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottom: "20px",
            borderColor: "red",
            borderWidth: "12px",
            backgroundColor: "#F7F5F2",
            padding: "50px"



        }}>

            <h3 style={{ color: "#8D8DAA" }}>Sign In</h3>
            <div className="form-group">
                <label>User Name</label>
                <input type="uname" className="form-control " placeholder="Enter User Name"
                    onChange={(e) => {
                        unameChange(e)
                    }} />

            </div>
            <div className="form-group">
                <label>Email address</label>
                <p>

                    <span style={{ color: "red" }}> {emailError}</span>
                </p>
                <input type="email" className="form-control" placeholder="Enter email"
                    onChange={(e) => {
                        emailChange(e)
                    }} />

            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {
                    passwordChange(e)
                }} />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button className="btn btn-primary btn-block" style={{
                margin: '30px',
                boxSizing: 'content-box',
                width: '80px',
                borderRadius: '30px',
                backgroundColor: '#8D8DAA',
                borderColor: '#8D8DAA'
            }} onClick={IsValid}>Submit</button>
            <p className="forgot-password text-right">
            </p>
        </div>
    );
}