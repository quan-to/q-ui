// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Image = (props) => {
  const StyledImage = styled.div`
    width: auto;
    height: ${props.height}px;
    background: url(${_theme.imageDirectory}${props.file}) no-repeat;
    background-size: ${props.width}px ${props.height}px;
    background-position: ${props.position || 'center'};
  `;

  return(
    <StyledImage
      className={props.className}
    />
  )
};

export default Image;
