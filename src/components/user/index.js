import React, { Component } from 'react';
import './index.css';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }

  switchSmile = () => {
    console.log("switch");
    this.setState({ isVisible: !this.state.isVisible })
  }


  render() {
    const { name, avatar, married } = this.props;
    const smile = married ? "💔" : "💕";
    return (
      <article>
        <h1>{name} {this.state.isVisible && smile}</h1>
        <img src={avatar}></img>
        <button onClick={this.switchSmile}>{this.state.isVisible
          ? "Hide" : "Show"} married</button>
      </article>
    );
  }


}

export default User;
