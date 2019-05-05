import React, { PureComponent } from 'react';
import If from './../If';

class Timer extends PureComponent {
  state = {
    seconds: 0,
    timer: null,
  }

  toHHMMSS(input) {
    const sec_num = parseInt(input, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10)
      hours = '0' + hours;
    if (minutes < 10)
      minutes = '0' + minutes;
    if (seconds < 10)
      seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  componentDidMount() {
    this.setState({
      seconds: this.props.seconds,
      timer: setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
        }))
      }, 1000),
    });

  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    if (this.state.seconds === 0) {
      clearInterval(this.state.timer);
    }

    return(
      <div data-reset={this.props.reset}>
        <If test={this.state.seconds > 0}>
          <div>{this.toHHMMSS(this.state.seconds)}</div>
        </If>
        <If test={this.state.seconds === 0}>
          {this.props.children}
        </If>
      </div>
    );
  }
}

export default Timer;
