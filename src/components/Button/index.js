import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Button = (props) => {
  const StyledButton = styled.button`
    width: ${props.fluid ? '100%' : 'auto'};
    padding: ${_theme.rythm.base + _theme.borderAndRadius}px ${_theme.rythm.base * 1.5}px ${_theme.rythm.base}px;
    font-family: ${_theme.typo.family};
    font-size: ${_theme.typo.scale[2]}em;
    font-weight: regular;
    background-image: ${props.icon ? 'url(' + _theme.iconDirectory + props.icon + '.svg) no-repeat 98%' : 'none'};
    background-color: ${props.background || _theme.palette.blue};
    background-size: 40px 30px;
    background-position-x: 96 %;
    color: ${props.foreground || _theme.palette.white};
    border: none;
    border-radius: ${_theme.borderAndRadius}px;
    border-bottom: solid ${_theme.borderAndRadius}px rgba(0, 0, 0, 0.2);
    cursor: ${props.disable ? 'not-allowed' : 'pointer'};
    opacity: ${props.disable ? '0.4' : 1};
    text-transform: capitalized;
    text-align: ${props.align || 'center'};
    transition: all ${_theme.transitionProps};
    outline: none;

    :focus {
      box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
    }

    :active {
      border-bottom: solid ${_theme.borderAndRadius}px rgba(0, 0, 0, 0);
      box-shadow: none;
      filter: brightness(90%);
    }
`;

  return (
    <StyledButton
      className={props.className}
      style={props.style}
      onClick={props.disable ? undefined : props.onClick}
      disable={props.disable}
      icon={props.icon}
    >
      {props.children}
    </StyledButton>
  )
};

Button.propTypes = {
  clasName: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.any.isRequired,
  disable: PropTypes.bool,
  icon: PropTypes.string,
};

export default Button;
