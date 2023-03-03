import React, { Component } from 'react';
import User from '../user/User';
import UserForm from '../userForm/UserForm';
import './UserSection.css'
class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map(user => ({ ...user, isSelected: false }))
    }
  }

  render() {
    const users = this.state.users.map(u =>
      <User key={u.id} user={u} selectUser={this.selectUser} />);
    return (
      <section>
        {users}
        <UserForm addUser={this.addUser} />
      </section>
    );
  }

  selectUser = (id) => {
    const { users } = this.state;
    const newUsers = users.map(user => ({
      ...user,
      isSelected: user.id == id ? !user.isSelected : user.isSelected
    }));
    this.setState({ users: newUsers });
  }

  addUser = (name, avatar, married) => {
    const { users } = this.state;
    const newUsers = [...users, {
      name,
      avatar,
      married,
    }];
    this.setState({ users: newUsers });
  }

}




const userDB = [
  {
    id: 1,
    name: 'Bob Ros',
    avatar: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
    married: false
  },
  {
    id: 2,
    name: 'Ros Bob',
    avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    married: false
  },
  {
    id: 3,
    name: 'Arnold S',
    avatar: 'https://cdn.pixabay.com/photo/2017/06/09/23/22/avatar-2388584_960_720.png',
    married: true
  }
]

export default UserSection;
