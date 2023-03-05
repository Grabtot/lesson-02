import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, timeoutID: null };
  }

  start = () => {
    const id = setTimeout(function tick() {
      this.setState(prevState => ({ count: prevState.count + 1 }));
      const newId = setTimeout(tick.bind(this), 1000);
      this.setState({ timeoutID: newId });
    }.bind(this), 1000);
    this.setState({ timeoutID: id });
  };
  

  stop = () => {
    clearTimeout(this.state.timeoutID);
    this.setState({ timeoutID: null });
  };

  reset = () =>
    this.setState({ count: 0 });


  componentWillUnmount() {
    clearTimeout(this.state.timeoutID);
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        {this.state.timeoutID ? (
          <button className='stop' onClick={this.stop}>Stop</button>
        ) : (
          <button className='start' onClick={this.start}>Start</button>
        )}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
