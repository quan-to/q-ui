/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import PinInput from 'react-pin-input';
import _theme from './../Theme';

const PinStyles = {
  input: {
    border: 'none',
    borderBottom: `solid 2px ${_theme.palette.regularGrey}`,
    fontSize: `${_theme.typo.scale[6]}em`,
    margin: '0 8px',
  },
  inputFocus: {
    borderBottom: `solid 2px ${_theme.palette.blue}`,
  }
}

const Pin = (props) =>  (
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
