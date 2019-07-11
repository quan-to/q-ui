import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Divider = (props) => {
  const Hr = styled.hr`
    width: 30px;
    height: 2px;
    margin: ${props.marginY || _theme.rythm.scale[1]}px ${props.marginX || 0}px;
    background: ${props.foreground || _theme.palette.blue};
  `;

  return (
    <Hr
      className={props.className}
    />
  );
}

export default Divider;
