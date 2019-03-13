// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../theme';

type Props = {
  className?: string,
  file: string,
  width: number,
  height: number,
  position: string
};

const Image = (props:Props) => {
  const StyledImage = styled.div`
    width: auto;
    height: ${props.height}px;
    background: url(${_theme.imageDirectory}{props.file}) no-repeat;
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
