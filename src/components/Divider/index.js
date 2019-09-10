import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import THEME from './../Theme';

const Divider = (props) => {
  const Hr = styled.hr`
    width: 30px;
    height: 2px;
    margin: ${props.marginY || THEME.rythm.scale[1]}px ${props.marginX || 0}px;
    background: ${props.foreground || THEME.palette.blue};
  `;

  return (
    <Hr
      className={props.className}
      style={props.style}
      marginY={props.marginY}
      marginX={props.marginX}
      foreground={props.foreground}
    />
  );
}

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  marginY: PropTypes.number,
  marginX: PropTypes.number,
  foreground: PropTypes.string,
};

export default Divider;
