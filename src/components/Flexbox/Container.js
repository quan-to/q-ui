import React from 'react';
import PropTypes from 'prop-types';

function renderClassNames(props) {
  let classNames = `container ${props.className}`;

  classNames += props.fluid ? ` container-fluid` : '';

  return classNames;
}

const Container = (props) => (
  <section
    style={props.style || {}}
    className={renderClassNames(props)}
    fluid={props.fluid}
  >
    {props.children}
  </section>
);

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fluid: PropTypes.any,
};

export default Container;
