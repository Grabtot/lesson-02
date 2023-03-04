import React, { Component } from 'react';
import '../counter/Counter.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
      intervalID: null
    };
  }

  start = () => {
    const id = setInterval(() => {
      this.setState((prevState) => ({
        time: new Date(prevState.time.getTime() + 1000)
      }));
    }, 1000);
    this.setState({ intervalID: id });
  };

  stop = () => {
    clearInterval(this.state.intervalID);
    this.setState({ intervalID: null });
  };

  reset = () =>
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });


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
    const {time , intervalID} = this.state;
    return (
      <div>
        <h2>{time.toLocaleTimeString()}</h2>
        {intervalID ? (
          <button className='stop' onClick={this.stop}>Stop</button>
        ) : (
          <button className='start' onClick={this.start}>Start</button>
        )}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
