import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Loader = (props) => {
  const AnimatedDivs = styled.div`
    display: relative;
    width: ${props.size}px;
    height: ${props.size}px;
    background-color: ${_theme.palette.white};
    padding: 0;
    margin: 0;
    border: none;
    text-align: left;
    animation: spin 3s infinite ease-in-out;

    > div {
      background-color: ${_theme.palette.blue};
      width: ${(props.size / 3)}px;
      height: ${(props.size / 3)}px;
      display: inline-block;
      margin: 0;
      padding: 0;
      border: none;
      float: left;
      transition: margin 1s;
    }

    > div:nth-child(5) {
      background-color: ${_theme.palette.white};
    }

    > div:nth-child(9) {
      animation: first 2.9s infinite ease-in-out;
    }

    @keyframes first {
      0% { margin-top: 0; }
      20% { margin-top: ${(props.size / 3)}px; }
      40% { margin-top: ${(props.size / 3)}px; }
      58% { margin-top: 0; }
      100% { margin-top: 0; }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      40% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return(
    <AnimatedDivs
      className={props.className}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </AnimatedDivs>
    );
}

export default Loader;
