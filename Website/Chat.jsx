import React, { Component, StyleSheet } from "react";
import Nav from "./Nav";
import { Link, Redirect, withRouter } from "react-router-dom";
import Not_logged from "./Not_logged";

class Chat extends Component {
  constructor(props){
    super(props);
    var d = new Date();
    if(localStorage.login_response=="Successfully logged-in!!!"){
      fetch("http://5.181.217.131:5000/chatinit", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email : localStorage.details_user
        }),
      })
        .then((response) => response.json())
        .then((datares) => {
          localStorage.chat_g = datares.grp_id;
          localStorage.chat_c = datares.created;
          //Do anything else like Toast etc.
        });
    }
  }
  render() {
    if(localStorage.login_response!="Successfully logged-in!!!"){
      return(
        <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <section
        style={{
          backgroundColor:'white',
          marginLeft: "15%",
          marginRight: "15%",
          padding: "12px 20px",
          borderRadius: "20px",
          alignContent: "center",
          justifyContent: "center"
        }}
        >
        <Not_logged/>
        <h3 style={{textAlign:'center'}}>To chat with other members, you need to log-in</h3>
        </section>
      </React.Fragment>
      );
    }
    else{
      return (
        <React.Fragment>
          <Nav></Nav>
          <br></br>
          <List_button />
          <br></br>
          <Chat_box />
        </React.Fragment>
      );
    }
  }
}
class List_button extends Component {
  constructor(props) {
    super(props);
    this.state = { members: "closed" };
  }
  open = (e) => {
    if ((this.state.members = "closed")) {
      this.setState({ members: "open" });
    }
  };
  close = (e) => {
    if ((this.state.members = "open")) {
      this.setState({ members: "closed" });
    }
  };
  render() {
    if (this.state.members == "open") {
      return (
        <React.Fragment>
          <section>
            <br></br>
            <br></br>
            <button
              id="member_list"
              style={{
                backgroundColor: "#2c3531",
                color: "white",
                fontSize: "150%",
                borderRadius: "10px",
                marginLeft: "2%",
              }}
              onClick={this.close}
            >
              X
            </button>
            <br></br>
            <Display_list />
          </section>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <section>
            <br></br>
            <br></br>
            <button
              id="member_list"
              style={{
                backgroundColor: "#2c3531",
                color: "white",
                fontSize: "150%",
                marginLeft: "2%",
                borderRadius: "10px",
              }}
              onClick={this.open}
            >
              ☰ Members
            </button>
          </section>
        </React.Fragment>
      );
    }
  }
}
class Display_list extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          style={{
            marginLeft: "2%",
            marginRight: "70%",
            borderRadius: "20%",
          }}
        >
          <ul
            style={{
              borderRadius: "15px",
              padding: "12px 20px",
              listStyleType: "none",
              backgroundColor: "#2c3531",
            }}
          >
            <li style={members}>Member 1</li>
            <li style={members}>Member 2</li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
class Chat_box extends Component {
  send = (e) => {
    let msg = document.getElementById("msg").value;
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var sec = d.getSeconds();
    month +=1;
    if (date<10){
      date = "0"+date;
    }
    if(month<10){
      month = "0"+month;
    }
    if(hrs<10){
      hrs = "0"+hrs;
    }
    if(mins<10){
      mins = "0"+mins;
    }
    if(sec<10){
      sec = "0"+sec;
    }
    if(localStorage.login_response=="Successfully logged-in!!!"){
      fetch("http://5.181.217.131:5000/pushchat", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email : localStorage.details_user,
          message:msg,
          grp_id:localStorage.chat_g,
          created: localStorage.chat_c , 
          dt : year+"-"+month+"-"+date+" "+hrs+":"+mins+":"+sec
        }),
      })
        .then((response) => response.json())
        .then((datares) => {
          console.log(datares);
          //Do anything else like Toast etc.
        });
    }
    document.getElementById("msg").value = "";
  };
  render() {
    return (
      <React.Fragment>
        <section
          style={{
            backgroundColor: "white",
            marginLeft: "10%",
            marginRight: "10%",
            borderRadius: "20px",
            padding: "12px 20px",
          }}
        >
          <input
            id="msg"
            placeholder="Type your message here"
            style={{ width: "90%", fontSize: "150%", borderRadius: "5px" }}
          ></input>
          <text> </text>
          <button
            style={{
              fontSize: "150%",
              backgroundColor: "#2c3531",
              borderRadius: "5px",
              color: "white",
            }}
            onClick={this.send}
          >
            {" "}
            Send{" "}
          </button>
        </section>
      </React.Fragment>
    );
  }
}
export default Chat;
const members = {
  width: "10%",
  color: "white",
};
