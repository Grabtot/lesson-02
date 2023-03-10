import React, { Component } from 'react';
import styles from './User.module.css';

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
    const { selectUser, theme } = this.props;
    console.log(this.props);
    const smile = married ? "💔" : "💕";
    const className = isSelected ? "selected" : undefined;

    return (
      <article className={styles[className] + " " + styles[theme]}>
        <h1>{name} {this.state.isVisible && smile}</h1>
        <img src={avatar} alt="Error"></img>
        <button onClick={this.switchSmile}>{this.state.isVisible
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
