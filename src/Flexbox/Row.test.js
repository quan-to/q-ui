import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Row from './Row';

describe('Flexbox\'s column component', () => {
  it('Testing children prop', () => {
    const wrapper = shallow(
      <Row>
        <h1>Hi!</h1>
      </Row>
    );

    expect(wrapper.contains(<h1>Hi!</h1>)).to.equal(true);
  });

  it('Testing className prop', () => {
    expect(shallow(
      <Row className="card" />
    ).find('.row.card')).to.have.lengthOf(1);
  });

  it('Testing positions', () => {
    expect(shallow(
      <Row start="xs" />
    ).find('.row.start-xs')).to.have.lengthOf(1);

    expect(shallow(
      <Row end="xs" />
    ).find('.row.end-xs')).to.have.lengthOf(1);
  });

  it('Testing alignments', () => {
    expect(shallow(
      <Row top="xs" />
    ).find('.row.top-xs')).to.have.lengthOf(1);

    expect(shallow(
      <Row bottom="xs" />
    ).find('.row.bottom-xs')).to.have.lengthOf(1);

    expect(shallow(
      <Row center="xs" />
    ).find('.row.center-xs')).to.have.lengthOf(1);

    expect(shallow(
      <Row around="xs" />
    ).find('.row.around-xs')).to.have.lengthOf(1);

    expect(shallow(
      <Row between="xs" />
    ).find('.row.between-xs')).to.have.lengthOf(1);

    expect(shallow(
      <Row reverse={true} />
    ).find('.row.reverse')).to.have.lengthOf(1);
  });
});
