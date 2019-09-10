import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import _theme from './../Theme';

const H1 = styled.h1`
  font-size: ${_theme.typo.scale[6]}em;
  text-transform: uppercase;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: ${_theme.typo.scale[5]}em;
  text-transform: uppercase;
  font-weight: bold;
`;

const Title = (props) => props.primary ? (
  <H1
    style={props.style}
    className={props.className}
  >
    {props.children}
  </H1>
) : (
    <H2
      style={props.style}
      className={props.className}
    >
      {props.children}
    </H2>
  );

Title.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  primary: PropTypes.bool,
};

export default Title;
