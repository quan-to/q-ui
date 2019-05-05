import React from 'react';

function renderClassNames(props) {
  let classNames = '';

  const classApplier = (value) => {
    if (!value[1]) {
      return false;
    }
    classNames += `${value[0]}${value[1]} `;
  };

  const propsTuples = [
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

const Col = (props) => (
  <div
    className={renderClassNames(props)}>
    {props.children}
  </div>
);

Col.defaultProps = {
  className: '',
};

export default Col;
