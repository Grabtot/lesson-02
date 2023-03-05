import React, { Component } from 'react';
import './SelectedUsers.module.css'

class SelectedUsers extends Component {
  render() {

    const {users, selectUser} = this.props;
    const selectedUsers = users.filter(user => user.isSelected)
    return (
      <ul>
        {
          selectedUsers.map(user => <li onClick={v => selectUser(user.id)} key={user.id}>{user.name}</li>)
        }
      </ul>
    );
  }
}

export default SelectedUsers;
