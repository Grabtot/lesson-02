import React, { Component } from 'react';
import './UserForm.css'
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
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="avatar" placeholder="Avatar URL" />
        <label>
          <input type="checkbox" name="married" />
          Married
        </label>
        <button type="submit">Add User</button>
      </form>
    );
  }
}

export default UserForm;
