import React, { Component } from 'react';
import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    }
  }

  switchSmile = () => {
    console.log("switch");
    this.setState({ isVisible: !this.state.isVisible })
  }


  render() {
    const { id, name, avatar, married, isSelected } = this.props.user;
    const { isVisible } = this.state;
    const selectUser = this.props.selectUser;
    const smile = married ? "💔" : "💕";

    const btnClass = isVisible ? "red" : "green";

    return (
      <article className={isSelected ? "selected" : undefined}>
        <h1>{name} {isVisible && smile}</h1>
        <img src={avatar} alt="Error"></img>
        <button className={btnClass} onClick={this.switchSmile}>{isVisible
          ? "Hide" : "Show"} married</button>
        <button onClick={v => {
          console.log("user selected");
          selectUser(id);
        }}>Selcet</button>
      </article>
    );
  }


}

export default User;
