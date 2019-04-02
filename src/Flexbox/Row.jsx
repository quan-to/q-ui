// @flow

import React from 'react';

type Props = {
  children: any,
  className?: string,
  start?: string,
  end?: string,
  top?: string,
  bottom?: string,
  center?: string,
  around?: string,
  between?: string,
  reverse?: boolean,
};

function renderClassNames(props: Props) {
  let classNames = 'row';

  const classApplier = (value:[string, string|number|void]) => {
    if (!value[1]) {
      return false;
    }
    classNames += ` ${value[0]}${value[1]}`;
  };

  const propsTuples:Array<[string, string|number|void]> = [
    ['start-', props.start],
    ['end-', props.end],
    ['top-', props.top],
    ['bottom-', props.bottom],
    ['center-', props.center],
    ['around-', props.around],
    ['between-', props.between],
  ];

  if (props.reverse) {
    classNames += ' reverse';
  }

  for (let i = 0; propsTuples.length > i; i++) {
    classApplier(propsTuples[i]);
  }

  classNames += ` ${props.className || ''}`;

  return classNames;
}

const Row = (props: Props) => (
  <div className={renderClassNames(props)}>
    {props.children}
  </div>
);

export default Row;
