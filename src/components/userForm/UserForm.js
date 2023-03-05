import React, { Component } from 'react';
import styles from './UserForm.module.css'
class UserForm extends Component {
  render() {
    const addUser = this.props.addUser;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const avatar = e.target.avatar.value;
        const married = e.target.married.checked;
        addUser(name, avatar, married);
      }}>
        <input type="text" name="name" placeholder="Name" onChange={this.handleName} />
        <input type="text" name="avatar" placeholder="Avatar URL" onChange={this.handleEmailUrl} />
        <label>
          <input type="checkbox" name="married" />
          Married
        </label>
        <button type="submit">Add User</button>
      </form>
    );
  }


  handleName = ({ e: { target } }) => {
    if (target.value!= "Bob") {
      target.className = styles.unvalid;
    }
  }

}

export default UserForm;
