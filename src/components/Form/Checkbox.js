import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import uniqid from 'uniqid';
import THEME from './../Theme';

const Checkbox = (props) => {
  const id = uniqid();

  const Input = styled.input`
    display: none;
    transition: all ${THEME.transitionProps};

    :checked + label {
      background: url(${THEME.iconDirectory}checkbox.svg) no-repeat;
    }
  `;

  const Label = styled.label`
    display: block;
    cursor: pointer;
    width: ${THEME.rythm.scale[1]}px;
    height: ${THEME.rythm.scale[1]}px;
    background: url(${THEME.iconDirectory}checkbox-blank.svg) no-repeat;
  `;

  return (
    <div className="color--blue">
      <Input
        id={props.id || id}
        type="checkbox"
        name={props.name}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
        checked={props.checked}
      />
      <Label htmlFor={props.id || id} />
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.any,
  checked: PropTypes.any,
};

export default Checkbox;
