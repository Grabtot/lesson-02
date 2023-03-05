import React, { Component } from 'react';
import styles from './Header.module.css'

class Header extends Component {
  render() {
    return (
      <header className={styles[this.props.theme]}>
        <select onChange={e => this.props.themeChanged(e)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select >
      </header >
    );
  }
}


export default Header;
