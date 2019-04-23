import React from 'react';
import styled from '@emotion/styled';
import _theme from './../Theme';

const P = styled.p`
  font-size: ${_theme.typo.scale[1]}em;
`;

const Small = styled.small`
  font-size: ${_theme.typo.scale[0]}em;
`;

const Paragraph = (props) => props.small ? (
  <Small className={props.className}>{props.children}</Small>
) : (
  <P className={props.className}>{props.children}</P>
)

export default Paragraph;
