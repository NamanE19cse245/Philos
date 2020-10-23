import React, { Component, StyleSheet } from "react";
import Nav from "./Nav";
import Not_logged from "./Not_logged";
import { Link, Redirect, withRouter } from "react-router-dom";

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {logged:'in'};
    if(localStorage.login_response=="Successfully logged-in!!!"){
      fetch("http://5.181.217.131:5000/fetchdet", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email : localStorage.details_user
        }),
      })
        .then((response) => response.json())
        .then((datares) => {
          document.getElementById("name").innerHTML = " "+datares.fname+" "+datares.lname;
          document.getElementById("res.email").innerHTML = " "+datares.email;
          document.getElementById("res.about").innerHTML = " "+datares.about;
          document.getElementById("res.q1").innerHTML = " "+datares.q1;
          document.getElementById("res.q2").innerHTML = " "+datares.q2;
          document.getElementById("res.q3").innerHTML = " "+datares.q3;
          document.getElementById("res.q4").innerHTML = " "+datares.q4;
          //Do anything else like Toast etc.
        });
    }
  }
  log_out =(e)=>{
    localStorage.login_response = "logged-out";
    this.setState({logged:'out'});
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
        <h3 style={{textAlign:'center'}}>To view your profile, you need to log-in</h3>
        </section>
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
              marginLeft: "10%",
              marginRight: "10%",
              borderRadius: "20px",
            }}
          >
            <br></br>
            <button style={{marginLeft:'80%',backgroundColor:'#2c3531',color:'white',fontSize:'150%'}}
            onClick={this.log_out}
            >
              Log-Out
            </button>
            <Profile_pic></Profile_pic>
            <User_details></User_details>
          </section>
        </React.Fragment>
      );
    }
  }
}
class Profile_pic extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src="https://th.bing.com/th/id/OIP.TouNZxZ6zY-HetqfYQ1GHQD6D6?pid=Api&rs=1"
          id="profile"
          style={{
            width: "200px",
            height: "200px",
            overflow: "hidden",
            borderRadius: "50%",
           // marginLeft: "42%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        ></img>
      </React.Fragment>
    );
  }
}
class User_details extends Component {
  render() {
    return (
      <React.Fragment>
        <label style={titles}>Name:</label>
        <label id="name"></label>
        <br></br>
        <br></br>
        <label style={titles}>Email:</label>
        <label id="res.email"></label>
        <br></br>
        <br></br>
        <label style={titles}>About:</label>
        <br></br>
        <label id="res.about" style={{fontStyle:'italic',marginLeft:'23%'}}></label>
        <br></br>
        <br></br>
        <label style={titles}>Q1: What motivates you to get out of bed each morning?</label>
        <p style={{marginLeft:'23%'}} id="res.q1"></p>
        <br></br>
        <br></br>
        <label style={titles}>Q2: What is a cause you are really passionate about?</label>
        <p style={{marginLeft:'23%'}} id="res.q2"></p>
        <br></br>
        <br></br>
        <label style={titles}>Q3: What is your favourite kind of vacation?</label>
        <p style={{marginLeft:'23%'}} id="res.q3"></p>
        <br></br>
        <br></br>
        <label style={titles}>Q4: What is your favourite embarassing story?</label>
        <p style={{marginLeft:'23%'}} id="res.q4"></p>
      </React.Fragment>
    );
  }
}
const titles = {
  marginLeft: "23%",
  marginRight:"auto",
  fontSize:'150%'
};
export default Profile;