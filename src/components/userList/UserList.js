import React, { Component } from 'react';
import User from '../user/User';

class UserList extends Component {
  render() {
    const { users, selectUser, theme } = this.props;
    const renderUsers = (user) =>
      <User theme={theme} key={user.id} user={user} selectUser={selectUser} />
    return (
      <section className={theme}>
        {
          users.map(renderUsers)
        }
      </section>
    );
  }
}

export default UserList;
