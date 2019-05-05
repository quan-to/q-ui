import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const Divider = (props) => {
  const Hr = styled.hr`
    width: 30px;
    height: 2px;
    margin: ${_theme.rythm.scale[1]}px 0;
    background: ${props.foreground || _theme.palette.blue};
  `;

  return (
    <Hr
      className={props.className}
    />
  );
}

export default Divider;
