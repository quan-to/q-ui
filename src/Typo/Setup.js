// @flow

import React from 'react';
import { Global, css } from '@emotion/core';
import _theme from './../theme';


type Props = {
  baseLine: number,
  color: string,
  font: string,
  lineHeight: number,
  reactNative: boolean,
}

export default function(props: Props) {
  const {
    color,
    font,
    lineHeight,
    reactNative,
  } = props;

  return (<Global styles={css`
    html {
      font-size: ${_theme.typo.base}${reactNative ? 'pt' : 'px'};
    }
    body {
      font-family: ${font};
      font-weight: 400;
      line-height: ${_theme.typo.lineHeight};
      color: ${color};
    }

    .t--center {
      text-align: center;
    }

    .t--bold {
      font-weight: bolder;
    }

    .t--right {
      text-align: right;
    }
    .t--left {
      text-align: left !important;
    }
  `} />)
};
