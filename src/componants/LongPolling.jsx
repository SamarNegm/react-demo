import React, { useState, useEffect } from "react";
export default function ShortPolling(props) {
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([]);

    const backendURL = 'http://localhost:3000/messages/long';


    const getData = async () => {
        const response = await fetch(backendURL);
        const { data } = await response.json();
        setMessages(messages.concat(data));
    };

    const setData = () => {
        fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        setMessage('');
    };

    useEffect(() => {
        getData();

    }, [messages]);



    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(message + "  mydata long" + JSON.stringify(message));
        setData();
        setMessage('');
    };


    return (
        <>
            <div className="form-wrapper col-4" style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
                marginBottom: "20px",
                borderColor: "red",
                borderWidth: "12px",
                backgroundColor: "#F7F5F2",
                padding: "50px"



            }}>
                <form id="form" className="validate" onSubmit={handelSubmit}>
                    <div className="form-field">
                        <label >message</label>
                        <input type="text" name="message" id="message" placeholder="message" required value={message} onChange={(e) =>
                            setMessage(e.target.value)
                        } />

                    </div>
                </form>

            </div>

            <section>
                <div className="form-wrapper col-4" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderColor: "red",
                    borderWidth: "12px",
                    backgroundColor: "#F7F5F2",
                    padding: "50px"



                }}>
                    <h2>Messages</h2>
                    <ul className="check-list">
                        {




                            messages.map((m, i) => <li key={i} >{m.message}</li>)
                        }




                    </ul>


                </div>
            </section>
        </>
    );
}


