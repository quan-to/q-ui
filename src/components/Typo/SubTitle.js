import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import _theme from './../Theme';

const H3 = styled.h3`
  font-size: ${_theme.typo.scale[4]}em;
`;

const H4 = styled.h4`
  font-size: ${_theme.typo.scale[3]}em;
`;

const H5 = styled.h5`
  font-size: ${_theme.typo.scale[2]}em;
`;

const SubTitle = (props) => {
  if (props.primary) {
    return (
      <H3
        style={props.style}
        className={props.className}
      >
        {props.children}
      </H3>
    );
  } else if (props.secondary) {
    return (
      <H4
        style={props.style}
        className={props.className}
      >
        {props.children}
      </H4>
    );
  } else {
    return (
      <H5
        style={props.style}
        className={props.className}
      >
        {props.children}
      </H5>
    );
  }
}

SubTitle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default SubTitle;
