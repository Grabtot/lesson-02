import React, { Component } from 'react';
import Counter from '../counter/Counter';
import SelectedUsers from '../selectedUsers/SelectedUsers';
import StopWatch from '../stopWatch/StopWatch';
import UserForm from '../userForm/UserForm';
import UserList from '../userList/UserList';
import styles from './UserSection.module.css'
class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map(user => ({ ...user, isSelected: false })),
      selectedUsers: []
    }
  }

  render() {
    const { users, selectedUsers } = this.state;
    const {theme} = this.props;
    return (
      <div className={styles.container + " " + styles[theme]}>
        <h1>Users</h1>
        <div>
          <div className={styles.users + " " + styles[theme]}>
            <h2>All users</h2>
            <UserList theme={theme} users={users} selectUser={this.selectUser} />
          </div>
          {selectedUsers.length > 0 ? (
            <div>
              <h2>Selected users</h2>
              <SelectedUsers theme={theme} users={users} selectUser={this.selectUser} />
            </div>
          ) : null}

        </div>
        <div>
          <h2>Add new User</h2>
          <UserForm theme={theme} addUser={this.addUser} />
        </div>
        <h2>Counters</h2>
        <div className={styles.counters + " " + styles[theme]}>
          <Counter theme={theme}/>
          <StopWatch theme={theme}/>
        </div>
      </div>
    );
  }

  selectUser = (id) => {
    const { users } = this.state;
    const newUsers = users.map(user => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected
    }));
    const newSelected = newUsers.filter(user => user.isSelected);
    this.setState({ users: newUsers, selectedUsers: newSelected });
  }

  addUser = (name, avatar, married) => {
    const { users } = this.state;
    const id = users.length + 1;
    const newUsers = [...users, {
      id,
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
    married: true,
  }
]

export default UserSection;
