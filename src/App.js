import User from './components/user';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Bob Ros',
          avatar: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png',
          married: false
        },
        {
          name: 'Ros Bob',
          avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
          married: false
        },
        {
          name: 'Arnold S',
          avatar: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
          married: true
        }
      ]
    }
  }

  addUser(name, avatar, married) {
    const { users } = this.state;
    const newUsers = [...users, {
      name,
      avatar,
      married,
    }];
    this.setState({ users: newUsers });
  }

  render() {

    const { users } = this.state;
    const renderUsers = users.map(user =>
      <User name={user.name} avatar={user.avatar} married={user.married} />)
    return (
      <section>
        {renderUsers}
        <form onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const avatar = e.target.avatar.value;
          const married = e.target.married.checked;
          this.addUser(name, avatar, married);
        }}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="avatar" placeholder="Avatar URL" />
          <label>
            <input type="checkbox" name="married" />
            Married
          </label>
          <button type="submit">Add User</button>
        </form>

      </section>

    );
  }
}

export default App;
