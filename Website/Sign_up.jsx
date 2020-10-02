import React, { Component, StyleSheet } from "react";
import Questions from "./Questions";
import { Link, Redirect, withRouter } from "react-router-dom";
class Sign_up extends React.Component {
  state = { cancel: false };
  render() {
    return (
      <React.Fragment>
        <br></br>
        <h1 style={{ marginLeft: "10%" }}>Fill in the required details:</h1>
        <section
          style={{
            backgroundColor: "white",
            marginLeft: "10%",
            marginRight: "10%",
            padding: "12px 20px",
            borderRadius: "10px",
          }}
        >
          <Details></Details>
          <br></br>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              type="button"
              style={{
                textAlign: "center",
                alignContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                borderRadius: "20px",
                width: "30%",
                backgroundColor: "red",
                fontSize: "150%",
              }}
            >
              Cancel
            </button>
          </Link>
        </section>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { move_next: "False" };
  }
  select_change = (e) => {
    this.handleChange();
    var change = document.getElementById("done").value;
    this.setState({ move_next: change });
  };
  handleChange = function (e) {
    var fname = document.getElementById("Fname").value;
    fname = fname.trim();
    var lname = document.getElementById("Lname").value;
    lname = lname.trim();
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    email = email.trim();
    var pno = document.getElementById("pno").value;
    pno = pno.trim();
    var about = document.getElementById("about").value;
    var pass = document.getElementById("pass").value;
    var rpass = document.getElementById("rpass").value;
    if (rpass != pass || pass == "") {
      alert("Password doesn't match");
      document.getElementById("done").value = "False";
    } else if (fname == "" || lname == "" || pno == "" || email == "") {
      alert("You can't leave the form incomplete");
      document.getElementById("done").value = "False";
    } else if (age < 18) {
      alert(
        "Sorry! You do not meet our age criteria and therefore you are requested to close this site now!"
      );
      document.getElementById("done").value = "False";
    } else {
      var data = {
        fname: fname,
        lname: lname,
        age: age,
        email: email,
        phone: pno,
        about: about,
        password: pass,
      };

      console.log(
        JSON.stringify({
          fname: data.fname,
          lname: data.lname,
          age: data.age,
          email: data.email,
          pno: data.phone,
          about: data.about,
          password: data.password,
        })
      );
      fetch("http://5.181.217.131:5000", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fname: data.fname,
          lname: data.lname,
          age: data.age,
          pno: data.phone,
          email: data.email,
          about: data.about,
          password: data.password,
        }),
      })
        .then((response) => response.json())
        .then((datares) => {
          window.alert(datares);
          //Do anything else like Toast etc.
        });
    }
  };
  render() {
    if (this.state.move_next == "False") {
      return (
        <React.Fragment>
          <form onSubmit={this.handleChange}>
            <fieldset
              style={{
                backgroundColor: "#ceccca",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <legend>
                <b>Personal Information:</b>
              </legend>
              <input
                id="Fname"
                type="text"
                required
                placeholder="First Name"
                style={{
                  width: "55%",
                  borderRadius: "5px",
                  fontSize: "150%",
                }}
              ></input>
              <br></br>
              <br></br>
              <input
                id="Lname"
                placeholder="Last Name"
                type="text"
                required
                style={{ width: "55%", borderRadius: "5px", fontSize: "150%" }}
              ></input>
              <br></br>
              <br></br>
              <input
                id="age"
                type="number"
                placeholder="Age"
                required
                style={{ width: "35%", borderRadius: "5px", fontSize: "150%" }}
              ></input>
              <text style={{ color: "red", marginLeft: "1%" }}>
                (You need to be 18 or above to use our services)
              </text>
              <br></br>
              <br></br>
              <input
                id="pno"
                type="phone"
                placeholder="Phone no. (+91)"
                required
                style={{ width: "55%", borderRadius: "5px", fontSize: "150%" }}
              ></input>
            </fieldset>
            <br></br>
            <br></br>
            <fieldset
              style={{
                backgroundColor: "#ceccca",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <legend>
                <b>Choose:</b>
              </legend>
              <input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
                style={{ width: "55%", borderRadius: "5px", fontSize: "110%" }}
              ></input>
              <br></br>
              <br></br>
              <input
                id="pass"
                type="password"
                placeholder="Password"
                required
                style={{ width: "35%", borderRadius: "5px", fontSize: "110%" }}
              ></input>
              <br></br>
              <br></br>
              <input
                id="rpass"
                type="password"
                placeholder="Re-Enter"
                required
                style={{ width: "35%", borderRadius: "5px", fontSize: "110%" }}
              ></input>
            </fieldset>

            <br></br>
            <br></br>
            <label>Tell us something about yourself: </label>
            <br></br>
            <textarea
              id="about"
              rows="10"
              style={{
                resize: "none",
                width: "90%",
                marginLeft: "5%",
              }}
            ></textarea>
            <br></br>
            <input
              onChange={this.select_change}
              type="checkbox"
              name="student"
              id="done"
              value="True"
            ></input>
            <label>
              All Information provided by me is true to my knowlegde (once you
              check the box, the form gets submitted)
            </label>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Great Work! Only a few more steps left</h1>
          <Link to="/questions" style={{ textDecoration: "none" }}>
            <button
              type="submit"
              style={{
                textAlign: "center",
                alignContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
                borderRadius: "20px",
                width: "30%",
                backgroundColor: "#88bdbc",
                fontSize: "150%",
              }}
            >
              Next
            </button>
          </Link>
        </React.Fragment>
      );
    }
  }
}
export default Sign_up;
