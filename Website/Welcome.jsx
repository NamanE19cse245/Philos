import React, { Component, StyleSheet } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Profile from "./Profile";
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {res:'false'};
  }
  render() {
    if(localStorage.login_response=="Successfully logged-in!!!"){
      return(
        <React.Fragment>
          <Profile/>
        </React.Fragment>
      );

    }
    else{
      return (
        <React.Fragment>
          <Nav></Nav>
          <br></br>
          <br></br>
          <br></br>
          <section
            style={{
              backgroundColor: "white",
              alignContent: "center",
              padding: "12px 20px",
              marginRight: "15%",
              marginLeft: "15%",
              borderRadius: "12px",
              alignItems: "center",
            }}
          >
            <img
              src={require("./Philos_logo.jpg")}
              alt="logo"
              width="100px"
              height="100px"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
            <br></br>
            <Form></Form>
            <Link to="/sign_up" style={{ textDecoration: "none" }}>
              <button
                type="button"
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  borderRadius: "7px",
                  backgroundColor: "#2c3531",
                  width: "30%",
                  color: "white",
                  fontSize: "150%",
                }}
              >
                New Here? Sign-up
              </button>
              <p id="success" style={{color:'green',fontStyle:'italic',fontWeight:'bold'}}></p>
            </Link>
          </section>
        </React.Fragment>
      );
    }
  }
}
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {res:'false'};
  }
  log_in = (e) =>{
    var email_Adress = document.getElementById("EA").value ;
    var Pass_word = document.getElementById("PW").value ;
    var cred = {    // cred = credentials to check values
      email : email_Adress,
      pass  : Pass_word
    }
    localStorage.details_user = cred.email ;
    fetch("http://5.181.217.131:5000/login", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email : cred.email,
          pass : cred.pass
        }),
      })
        .then((response) => response.json())
        .then((datares) => {
          window.alert(datares);
          localStorage.login_response = datares;
          if(localStorage.login_response=="Successfully logged-in!!!"){
          document.getElementById("success").innerHTML = "Logged-in Successfully! Click on the Home or Profile Tab to Continue";
        }
          //Do anything else like Toast etc.
        });
  }
  render() {
    return (
      <form
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          textAlign: "center",
        }}
      >
        <input
          required
          type="text"
          placeholder="Username"
          id = "EA" // Email Address ID to fetch value
          style={{ borderRadius: "12px", width: "45%", fontSize: "150%" }}
        ></input>
        <br></br>
        <br></br>
        <input
          required
          id = "PW" // Password ID to fetch value
          placeholder="Password"
          type="password"
          style={{ borderRadius: "12px", width: "45%", fontSize: "150%" }}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <button
          type="button"
          style={{
            textAlign: "center",
            alignContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "7px",
            width: "30%",
            backgroundColor: "#88bdbc",
            fontSize: "150%",
          }}
          onClick={this.log_in}
        >
          Log In
        </button>
        <br></br>
        <br></br>
      </form>
    );
  }
}
export default Home;
