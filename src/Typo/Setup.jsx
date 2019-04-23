import React from 'react';
import { Global, css } from '@emotion/core';
import _theme from './../Theme';

export default function(props) {
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
