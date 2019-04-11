// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

type Props = {
  name: string,
  className?: string,
  size: number
};

const Icon = (props:Props) => {
  const StyledIcon = styled.div`
    display: inline-block;
    width: ${props.size}px;
    height: ${props.size}px;
    background: url(${_theme.iconDirectory}${props.name}.svg) no-repeat;
    background-size: ${props.size}px;
    vertical-align: sub;
  `;

  return(
    <StyledIcon className={props.className} />
  );
};

export default Icon;
