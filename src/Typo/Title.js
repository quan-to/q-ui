import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const H1 = styled.h1`
  font-size: ${_theme.typo.scale[6]}em;
  text-transform: uppercase;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: ${_theme.typo.scale[5]}em;
  text-transform: uppercase;
  font-weight: bold;
`;

const Title = (props) => props.primary ? (
  <H1 className={props.className}>{props.children}</H1>
) : (
  <H2 className={props.className}>{props.children}</H2>
);

export default Title;
