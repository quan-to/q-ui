import React from 'react';
import PropTypes from 'prop-types';

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
    style={props.style}
    {props.children}
  </div>
);

Col.propTypes = {
  className: PropTypes.string,
  style: PropTypes.any,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: PropTypes.string,
  last: PropTypes.string,
};

export default Col;
