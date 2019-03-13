// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../theme';

const H1 = styled.h1`
  font-size: ${_theme.typo.scale[6]}em;
`;

const H2 = styled.h2`
  font-size: ${_theme.typo.scale[5]}em;
`;

type Props = {
  children: any,
  className?: string,
  primary?: any,
  secondary?: any
};

const Title = (props: Props) => props.primary ? (
  <H1 className={props.className}>{props.children}</H1>
) : (
  <H2 className={props.className}>{props.children}</H2>
);

export default Title;
