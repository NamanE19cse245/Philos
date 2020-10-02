import React, { Component, StyleSheet } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
class Home extends React.Component {
  render() {
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
            src="https://cdn.pixabay.com/photo/2013/04/01/21/31/parking-99212_640.png"
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
          </Link>
        </section>
      </React.Fragment>
    );
  }
}
class Form extends React.Component {
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
          style={{ borderRadius: "12px", width: "45%", fontSize: "150%" }}
        ></input>
        <br></br>
        <br></br>
        <input
          required
          placeholder="Password"
          type="password"
          style={{ borderRadius: "12px", width: "45%", fontSize: "150%" }}
        ></input>
        <br></br>
        <br></br>
        <br></br>
        <button
          type="submit"
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
