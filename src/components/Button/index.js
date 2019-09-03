import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Button = (props) => {
  const StyledButton = styled.button`
    width: ${props.fluid ? '100%' : 'auto'};
    padding: ${_theme.rythm.base + _theme.borderAndRadius}px ${_theme.rythm.base * 1.5}px ${_theme.rythm.base}px;
    font-family: ${_theme.typo.family};
    font-size: ${_theme.typo.scale[2]}em;
    background: url(${_theme.iconDirectory}${props.icon}.svg) no-repeat 98% ${props.background || _theme.palette.blue};
    color: ${props.foreground || _theme.palette.white};
    border: none;
    background-size: 40px 30px;
    background-position-x: 96 %;
    cursor: ${props.disable ? 'not-allowed' : 'pointer'};
    opacity: ${props.disable ? '0.4' : 1};
    text-transform: capitalized;
    font-weight: regular;
    text-align: ${props.align || 'center'};
    border-radius: ${_theme.borderAndRadius}px;
    border-bottom: solid ${_theme.borderAndRadius}px rgba(0, 0, 0, 0.2);
    transition: all ease-out 0.1s;
    outline: none;

    :focus {
      box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
    }

    :active {
      border-bottom: solid ${_theme.borderAndRadius}px rgba(0, 0, 0, 0);
      background: url(${_theme.iconDirectory}${props.icon}.svg) no-repeat 98% ${_theme.palette.lightBlue};
      box-shadow: none;
    }
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
