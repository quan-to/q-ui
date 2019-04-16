import React from 'react';

function renderClassNames(props) {
  let classNames = `container ${props.className}`;

  classNames += props.fluid ? ` container-fluid` : '';

  return classNames;
}

const Container = (props) => (
  <section
    style={props.style || {}}
    className={renderClassNames(props)}
  >
    {props.children}
  </section>
);

export default Container;
