import React from 'react';
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import _theme from './../Theme';

const P = styled.p`
  font-size: ${_theme.typo.scale[1]}em;
`;

const Small = styled.small`
  font-size: ${_theme.typo.scale[0]}em;
`;

const Paragraph = (props) => props.small ? (
  <Small
    style={props.style}
    className={props.className}
  >
    {props.children}
  </Small>
) : (
    <P
      style={props.style}
      className={props.className}
    >
      {props.children}
    </P>
  )

Paragraph.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  small: PropTypes.bool,
}

export default Paragraph;
