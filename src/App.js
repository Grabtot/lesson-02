import './App.css';
import { Component } from 'react';
import UserSection from './components/userSection/UserSection';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <UserSection />
    );
  }
}

export default App;
