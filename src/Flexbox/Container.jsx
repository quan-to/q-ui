// @flow

import React from 'react';

type Props = {
  children: any,
  className?: string,
  fluid?: any,
  style?: any,
};

function renderClassNames(props: Props) {
  let classNames = `container ${props.className}`;

  classNames += props.fluid ? ` container-fluid` : '';

  return classNames;
}

const Container = (props: Props) => (
  <section
    style={props.style || {}}
    className={renderClassNames(props)}
  >
    {props.children}
  </section>
);

export default Container;
