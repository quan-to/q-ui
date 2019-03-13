import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Col from './Col';

describe('Flexbox\'s column component', () => {
  it('Testing children prop', () => {
    const wrapper = shallow(
      <Col xs="12">
        <h1>Hi!</h1>
      </Col>
    );

    expect(wrapper.contains(<h1>Hi!</h1>)).to.equal(true);
  });

  it('Testing className prop', () => {
    expect(shallow(
      <Col xs="12" className="card" />
    ).find('.col-xs-12.card')).to.have.lengthOf(1);
  })

  it('Testing each column size', () => {
    expect(shallow(
      <Col xs="12" />
    ).find('.col-xs-12')).to.have.lengthOf(1);

    expect(shallow(
      <Col sm="8" />
    ).find('.col-sm-8')).to.have.lengthOf(1);

    expect(shallow(
      <Col md="6" />
    ).find('.col-md-6')).to.have.lengthOf(1);

    expect(shallow(
      <Col lg="3" />
    ).find('.col-lg-3')).to.have.lengthOf(1);
  });

  it('Testing all sizes together', () => {
    expect(shallow(
      <Col
        xs="12"
        sm="8"
        md="6"
        lg="3"
      />
    ).find('.col-xs-12.col-sm-8.col-md-6.col-lg-3')).to.have.lengthOf(1);
  });

  it('Testing each offset size', () => {
    expect(shallow(
      <Col xsOffset="10" />
    ).find('.col-xs-offset-10')).to.have.lengthOf(1);

    expect(shallow(
      <Col smOffset="8" />
    ).find('.col-sm-offset-8')).to.have.lengthOf(1);

    expect(shallow(
      <Col mdOffset="6" />
    ).find('.col-md-offset-6')).to.have.lengthOf(1);

    expect(shallow(
      <Col lgOffset="4" />
    ).find('.col-lg-offset-4')).to.have.lengthOf(1);
  });

  it('Testing all offsets together', () => {
    expect(shallow(
      <Col
        xsOffset="10"
        smOffset="8"
        mdOffset="6"
        lgOffset="4"
      />
    ).find('.col-xs-offset-10.col-sm-offset-8.col-md-offset-6.col-lg-offset-4')).to.have.lengthOf(1);
  });

  it('Testing position', () => {
    expect(shallow(
      <Col first="sm" />
    ).find('.first-sm')).to.have.lengthOf(1);

    expect(shallow(
      <Col last="sm" />
    ).find('.last-sm')).to.have.lengthOf(1);
  });
});
