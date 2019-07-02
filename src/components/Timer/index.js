import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import Button from './../Button';
import If from './../If';
import _theme from './../Theme';

class Timer extends PureComponent {
  state = {
    seconds: 0,
    timer: null,
  }

  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
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

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.state.timer);
    }
  }

  reset(exposedFunction) {
    this.setState({
      seconds: this.props.seconds,
      timer: setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
        }))
      }, 1000),
    });

    exposedFunction();
  }

  render() {
    const StyledButton = styled.button`
      color: ${_theme.palette.blue};
      border: none;
      background: none;
      padding: 0;
      font-size: 16px;
      text-decoration: underline;
      margin-top: ${_theme.rythm.base}px;
      cursor: pointer;
    `;

    return(
      <div>
        <If test={this.state.seconds > 0}>
          <div>{this.toHHMMSS(this.state.seconds)}</div>
        </If>
        <If test={this.state.seconds === 0}>
          {this.props.children}
          
          <If test={this.props.resetable}>
            <div>
            <StyledButton onClick={() => this.reset(this.props.onClick)}>
              {this.props.resetable}
            </StyledButton>
            </div>
          </If>
        </If>
      </div>
    );
  }
}

export default Timer;
