// @flow
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import PinInput from 'react-pin-input';

type Props = {
  className?: string,
  length: number,
  onComplete?: Function
}

const PinStyles = {
  input: {
    border: 'none',
    borderBottom: 'solid 2px #a8a8a8',
    fontSize: '30px',
    margin: '0 8px',
  },
  inputFocus: {
    borderBottom: 'solid 2px #4664D3',
  }
}

const Pin = (props: Props) =>  (
  <PinInput
    className={props.className}
    onComplete={props.onComplete}
    length={props.length}
    type="numeric"
    inputStyle={PinStyles.input}
    inputFocusStyle={PinStyles.inputFocus}
  />
);;

export default Pin;
