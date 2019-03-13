// @flow

import React from 'react';

type Props = {
  children: any,
  className?: string,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xsOffset?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  first?: string,
  last?: string,
}

function renderClassNames(props: Props) {
  let classNames = '';

  const classApplier = (value:[string, string|number|void]) => {
    if (!value[1]) {
      return false;
    }
    classNames += `${value[0]}${value[1]} `;
  };

  const propsTuples:Array<[string, string|number|void]> = [
    ['col-xs-', props.xs],
    ['col-sm-', props.sm],
    ['col-md-', props.md],
    ['col-lg-', props.lg],
    ['col-xs-offset-', props.xsOffset],
    ['col-sm-offset-', props.smOffset],
    ['col-md-offset-', props.mdOffset],
    ['col-lg-offset-', props.lgOffset],
    ['first-', props.first],
    ['last-', props.last]
  ];

  for (let i = 0; propsTuples.length > i; i++) {
    classApplier(propsTuples[i]);
  }

  classNames += `${props.className || ''}`;

  return classNames;
}

const Col = (props: Props) => (
  <div
    className={renderClassNames(props)}>
    {props.children}
  </div>
);

Col.defaultProps = {
  className: '',
};

export default Col;
