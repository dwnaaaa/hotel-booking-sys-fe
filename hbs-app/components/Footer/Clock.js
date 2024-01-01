import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    this.timerID = setInterval(
      () => this.tick(),
      1000 // Update every second
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    if (!this.state.isMounted) {
      return null;
    }

    const { currentTime } = this.state;

    return (
      <div className="clock">
        <h3>{currentTime.toLocaleTimeString()}</h3>
        <div className="clock-info">
          <div className="clock-date">{currentTime.toLocaleDateString()}</div>
          <div className="clock-timezone">{Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
        </div>
      </div>
    );
  }
  
}

export default Clock;
