import './App.css';
import { Component } from 'react';
import UserSection from './components/userSection/UserSection';
import Header from './components/header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
  }

  themeChanged = (e) => {
    const newTheme = e.target.value;
    this.setState({ theme: newTheme })
  }

  render() {
    return (
      <div className={this.state.theme}>
        <Header theme={this.state.theme} themeChanged={this.themeChanged} />
        <UserSection theme={this.state.theme}/>
      </div>
    );
  }
}


export default App;
