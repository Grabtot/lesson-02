import React, { Component } from 'react';

class SelectedUsers extends Component {
  render() {

    const {users} = this.props;
    const selectedUsers = users.filter(user => user.isSelected)
    return (
      <ul>
        {
          selectedUsers.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    );
  }
}

export default SelectedUsers;
