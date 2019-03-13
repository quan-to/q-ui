import React from 'react';
import { Global, css } from '@emotion/core';
import _theme from './../theme';

type Props = {
  name: string,
  file: string,
  weight?: string,
  tStyle?: string
};

const Font = (props:Props) => (
  <Global styles={css`
    @font-face {
      font-family: ${props.name};
      src: url(${_theme.typo.directory}${props.file});
      font-weight: ${props.weight ? props.weight : 'normal'};
      font-style: ${props.tStyle ? props.tStyle : 'normal'};
    }
  `} />
);

export default Font;
