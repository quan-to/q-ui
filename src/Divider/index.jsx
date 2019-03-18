import React from 'react';
import styled from '@emotion/styled';
import _theme from './../theme';

const Hr = styled.hr`
  width: 30px;
  height: 2px;
  margin: ${_theme.rythm.scale[1]}px 0;
  background: ${_theme.palette.blue};
`;

const Divider = () => (
  <Hr />
);

export default Divider;
