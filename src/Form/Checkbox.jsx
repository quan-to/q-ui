// @flow

import React from 'react';
import styled from '@emotion/styled';
import uniqid from 'uniqid';

type Props = {
  name: string,
  value: string,
  id?: string,
  className?: string,
};

const Checkbox = (props:Props) => {
  const id = uniqid();

  const Input = styled.input`
    display: none;

    :checked + label {
      background: url(/assets/images/checkbox.svg) no-repeat;
    }
  `;

  const Label = styled.label`
    display: block;
    width: 24px;
    height: 24px;
    background: url(/assets/images/checkbox-blank.svg) no-repeat;
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

export default Checkbox;
