import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, intervalID: null };
    console.log("constructor");
  }

  start = () => {
    const id = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
    this.setState({ intervalID: id });
  };

  stop = () => {
    clearInterval(this.state.intervalID);
    this.setState({ intervalID: null });
  };

  reset = () =>
    this.setState({ count: 0 });


  componentWillUnmount() {
    clearInterval(this.state.intervalID);
    console.log("unmount");
  }

  componentDidMount() {
    console.log("mount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>{this.state.count}</h2>
        {this.state.intervalID ? (
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
