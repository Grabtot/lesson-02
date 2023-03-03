import React, { Component } from 'react';
import User from '../user/User';

class UserList extends Component {
  render() {
    const { users, selectUser } = this.props;
    const renderUsers = (user) =>
      <User key={user.id} user={user} selectUser={selectUser} />
    return (
      <section>
        {
          users.map(renderUsers)
        }
      </section>
    );
  }
}

export default UserList;
