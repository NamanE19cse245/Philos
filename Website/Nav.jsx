import React, { Component, StyleSheet } from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    const styles = {
      display: "inline",
      color: "white",
      cursor: "pointer",
    };
    const space_style = {
      display: "inline",
      color: "#2c3531",
    };
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#2c3531",
            top: "0px",
            position: "absolute",
            right: "0px",
            left: "0px",
            width: "100%",
          }}
        >
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li style={styles} class="nav">
                Home
              </li>
            </Link>
            <li style={space_style}> </li>
            <li style={styles}>|</li>
            <li style={space_style}> </li>
            <li style={styles} class="nav">
              Profile
            </li>
            <li style={space_style}> </li>
            <li style={styles}>|</li>
            <li style={space_style}> </li>
            <li style={styles} class="nav">
              Chat
            </li>
            <li style={space_style}> </li>
            <li style={styles}>|</li>
            <li style={space_style}> </li>
            <li style={styles} class="nav">
              Meet
            </li>
            <li style={space_style}> </li>
            <li style={styles}>|</li>
            <li style={space_style}> </li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li style={styles} class="nav">
                About
              </li>
            </Link>
          </ul>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
export default Nav;
