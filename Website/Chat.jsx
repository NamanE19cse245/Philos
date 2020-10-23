import React, { Component, StyleSheet } from "react";
import Nav from "./Nav";
import { Link, Redirect, withRouter } from "react-router-dom";
import Not_logged from "./Not_logged";

class Chat extends Component {
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
    alert(msg);
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
