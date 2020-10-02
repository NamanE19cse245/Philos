import React, { Component } from "react";
import { Link } from "react-router-dom";
class Questions extends React.Component {
  constructor(props) {
    super(props);
    sessionStorage.previous = "hi";
  }
  loadFile = (event) => {
    var image = document.getElementById("profile");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  render() {
    if (sessionStorage.previous == "i") {
      return (
        <React.Fragment>
          <p>didnt</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1 style={{ marginLeft: "10%" }}>
            Select a Profile Picture and answer some basic Questions about
            yourself:
          </h1>
          <section
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              margin: "auto",
              alignContent: "center",
              marginRight: "10%",
              marginLeft: "10%",
              padding: "12px 20px",
            }}
          >
            <h2 style={{ marginLeft: "50px", marginRight: "50px" }}>
              Select a Profile Picture:
            </h2>
            <img
              src="https://th.bing.com/th/id/OIP.TouNZxZ6zY-HetqfYQ1GHQD6D6?pid=Api&rs=1"
              id="profile"
              style={{
                width: "200px",
                height: "200px",
                overflow: "hidden",
                borderRadius: "50%",
                marginLeft: "50px",
              }}
            ></img>
            <br></br>
            <input
              type="file"
              onChange={this.loadFile}
              name="myImage"
              accept="image/*"
              style={{
                marginLeft: "5%",
                border: "1px solid #ccc",
                display: "inline-block",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            />
            <br></br>
            <form>
              <Ques></Ques>
              <br></br>
              <button
                type="submit"
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  marginLeft: "41%",
                  marginRight: "45%",
                  borderRadius: "20px",
                  backgroundColor: " #88bdbc",
                  fontSize: "150%",
                }}
              >
                Submit
              </button>
            </form>
            <br></br>
            <Link to="/">
              <button
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  marginLeft: "41%",
                  borderRadius: "20px",
                  backgroundColor: "red",
                  fontSize: "150%",
                }}
              >
                Cancel
              </button>
            </Link>
          </section>
        </React.Fragment>
      );
    }
  }
}
class Ques extends React.Component {
  render() {
    return (
      <div>
        <h3
          style={{ textAlign: "left", marginLeft: "50px", marginRight: "50px" }}
        >
          Q1: What motivates you to get out of bed each morning?
        </h3>
        <textarea
          required
          style={{
            width: "90%",
            resize: "none",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "5%",
          }}
        ></textarea>
        <h3
          style={{ textAlign: "left", marginLeft: "50px", marginRight: "50px" }}
        >
          Q2: What is a cause you are really passionate about?
        </h3>
        <textarea
          required
          style={{
            width: "90%",
            resize: "none",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "5%",
          }}
        ></textarea>
        <h3
          style={{ textAlign: "left", marginLeft: "50px", marginRight: "50px" }}
        >
          Q3: What is your favourite kind of vacation?
        </h3>
        <textarea
          required
          style={{
            width: "90%",
            resize: "none",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "5%",
          }}
        ></textarea>
        <h3
          style={{ textAlign: "left", marginLeft: "50px", marginRight: "50px" }}
        >
          Q4: What is your favourite embarassing story?
        </h3>
        <textarea
          required
          style={{
            width: "90%",
            resize: "none",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "5%",
          }}
        ></textarea>
        <DropDown></DropDown>
      </div>
    );
  }
}
class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.select_profession = this.select_profession.bind(this);
    this.state = {
      jobs: "",
      study: "",
      change: false,
    };
  }
  select_profession = (e) => {
    var change = document.getElementById("student").value;
    this.setState({ jobs: change });
  };
  render() {
    if (this.state.jobs != "STD") {
      return (
        <React.Fragment>
          <h4 style={{ textAlign: "left", marginLeft: "50px" }}>
            Select you Profession:
          </h4>
          <select style={{ alignContent: "center", marginLeft: "50px" }}>
            <option>Engineer</option>
            <option>Medical Science</option>
          </select>
          <br></br>
          <input
            onChange={this.select_profession}
            type="checkbox"
            name="student"
            id="student"
            value="STD"
            style={{ alignContent: "center", marginLeft: "50px" }}
          ></input>
          <label>Student?</label>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h4 style={{ textAlign: "left", marginLeft: "50px" }}>
            Select your field of study:
          </h4>
          <select style={{ alignContent: "center", marginLeft: "50px" }}>
            <option>Now</option>
          </select>
          <br></br>
          <input
            onChange={this.select_profession}
            type="checkbox"
            name="student"
            id="student"
            value="PROF"
            style={{ alignContent: "center", marginLeft: "50px" }}
          ></input>
          <label>Professional?</label>
        </React.Fragment>
      );
    }
  }
}
export default Questions;
