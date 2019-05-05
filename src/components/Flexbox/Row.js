import React from 'react';

function renderClassNames(props) {
  let classNames = 'row';

  const classApplier = (value) => {
    if (!value[1]) {
      return false;
    }
    classNames += ` ${value[0]}${value[1]}`;
  };

  const propsTuples = [
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

const Row = (props) => (
  <div className={renderClassNames(props)}>
    {props.children}
  </div>
);

export default Row;
