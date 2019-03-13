import React from 'react';
import styled from '@emotion/styled';
import _theme from './../theme';

const Hr = styled.hr`
  width: 30px;
  height: 2px;
  margin: ${_theme.rythm.scale[1]}px 0;
  background: #4664D3;
`;

const Divider = () => (
  <Hr />
);

export default Divider;
