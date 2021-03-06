import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Button = (props) => {
  const StyledButton = styled.button`
    width: ${props.fluid ? '100%' : 'auto'};
    padding: ${_theme.rythm.base}px;
    font-family: ${_theme.typo.family};
    font-size: ${_theme.typo.scale[2]}em;
    background: url(${_theme.iconDirectory}${props.icon}.svg) no-repeat 98% ${props.background || '#4664D3'};
    color: ${props.foreground || '#fff'};
    border: none;
    background-size: 40px 30px;
    background-position-x: 96%;
    cursor: ${props.disable ? 'not-allowed' : 'pointer'};
    opacity: ${props.disable ? '0.4' : 1};
    text-transform: uppercase;
    font-weight: bold;
  `;

  return (
    <StyledButton
      className={props.className}
      onClick={props.disable ? undefined : props.onClick}
      disable={props.disable}
    >
      {props.children}
    </StyledButton>
  )
};

export default Button;
