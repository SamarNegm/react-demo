import "./messenger.css";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
// import { Widget, addResponseMessag } from "react-chat-widget";


export default function Messenger() {

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const BASE_URL = "http://localhost:3000";
  const socket = io(BASE_URL);

  useEffect(() => {

    socket.on("newMessage", (data) => {
      messages.push(data);
      setMessages([...messages]);
      console.log(messages, "messages");
    });
  }, []);
  useEffect(() => {
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newMessage);
    socket.emit("chat message", newMessage);
    setNewMessage('');
  }


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
        <form id="form" className="validate" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-field">
            <label >message</label>
            <input type="text" name="message" id="message" placeholder="message" required value={newMessage} onChange={(e) =>
              setNewMessage(e.target.value)
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




              messages.map((m, i) => <li key={i} >{m}</li>)
            }




          </ul>


        </div>
      </section>
    </>
  );
}
