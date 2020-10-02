import React, { Component, StyleSheet } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav></Nav>
        <br></br>
        <br></br>
        <br></br>
        <P1></P1>
      </React.Fragment>
    );
  }
}
class P1 extends React.Component {
  render() {
    const para = {
      color: "#4f4a41",
      fontSize: "120%",
      marginLeft: "5%",
      marginRight: "5%",
    };
    const head = {
      color: "white",
      fontSize: "300%",
      marginLeft: "5%",
    };
    return (
      <React.Fragment>
        <h1 style={head}>What is Philos?</h1>
        <p style={para}>
          Philos ( Greek word meaning <b>Friend</b> ), is a service that matches
          like-minded people using Machine Learning technologies. By using
          K-Mean Clustering Machine Learning algorithm, we create a group of the
          most compatible people, taking into account parameters like location,
          age,etc. It conceals the identity of all the users in the group for a
          period of seven days. After which the identity and the uploaded images
          along with information provided at the time of creating the account is
          displayed to all the users who are in that group. After the threshold
          period the users are encouraged to meet in the real world, in order to
          interact and share a new & unique experience.
        </p>
        <div>
          <img
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            width="75%"
            height="75%"
            alt="Friends"
            src="https://www.gapyear.com/wp-content/uploads/2017/11/TourGroupMain.jpg"
          ></img>
        </div>
        <h1 style={head}>Our Mission</h1>
        <p style={para}>
          Humans are social creatures and therefore, we need to connect. We have
          been living in communities and tribes since the ancient times. But in
          this age of <b>Digitization</b> as more and more aspects of our lives
          are moving online, our social life is moving there too. We have more
          friends and followers on social media than in real life. Meaningful
          real world connections are very important in a Human's life and
          therefore this scenario needs to be changed. Philos is a service that
          aims towards this problem, and we are sure we would make an impact in
          soving it.
        </p>
      </React.Fragment>
    );
  }
}
export default About;
