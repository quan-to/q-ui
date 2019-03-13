// @flow

import React from 'react';
import styled from '@emotion/styled';
import _theme from './../theme';

const P = styled.p`
  font-size: ${_theme.typo.scale[1]}em;
`;

const Small = styled.small`
  font-size: ${_theme.typo.scale[0]}em;
`;

type Props = {
  children: any,
  className?: string,
  small?: any,
};

const Paragraph = (props: Props) => props.small ? (
  <Small className={props.className}>{props.children}</Small>
) : (
  <P className={props.className}>{props.children}</P>
)

export default Paragraph;
