import React, { Component } from 'react';

class User extends Component {
  render() {
    const {name} = this.props;
    return (
      <article>
        <h1>{name}</h1>
        <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png' ></img>
      </article>
    );
  }
}

export default User;
