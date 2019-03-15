// @flow
/** @jsx jsx */

import React, { PureComponent } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import uniqid from 'uniqid';
import InputMask from 'react-input-mask';
import _theme from './../theme';

type Props = {
  className?: string,
  placeholder: string,
  name: string,
  mask?: string,
  maskChar?: string,
  password: boolean,
};

class Text extends PureComponent<Props> {
  constructor(props) {
    super();

    this.input = React.createRef();
    this.password = React.createRef();
    this.handleErase = this.handleErase.bind(this);
  }

  handleErase() {
    if (this.props.password) {
      this.password.current.value = '';

      return;
    }

    this.input.current.getInputDOMNode().value = '';

    return;
  }

  render() {
    const { props } = this;

    const TextGroup = styled.div`
      position: relative;
      padding: 15px 0 0;
      margin-top: 10px;
    `;

    const TextFieldStyle = css`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${_theme.palette.regularGrey};
    outline: 0;
    font-size: ${_theme.typo.scale[1]}em;
    color: #212121;
    padding: 7px 0;
    background: ${_theme.palette.white};
    transition: border-color 0.2s;

    ::placeholder {
      color: transparent;
    }

    :placeholder-shown ~ .form__label {
      font-size: ${_theme.typo.scale[1]}em;
      cursor: text;
      top: 20px;
    }

    :focus ~ .form__label {
      color: ${_theme.palette.regularGrey};
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 12px;
    }

    :focus ~ .form__cancel {
      opacity: 1;
    }

    :focus {
      padding-bottom: 6px;
      border-bottom: 2px solid ${_theme.palette.blue};
    }
    `;

    const TextLabel = styled.label`
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 12px;
      color: #9b9b9b;
    `;

    const EmptyButton = styled.button`
      opacity: 0;
      width: 20px;
      height: 20px;
      background: url(${_theme.iconDirectory}cancel.svg) no-repeat #fff;
      background-size: 20px;
      border: none;
      cursor: pointer;
      top: 20px;
      right: 0;
      position: absolute;
    `;

    const id = uniqid();

    return(
      <TextGroup className={props.className}>
        {props.password ? (
          <input
            type="password"
            css={TextFieldStyle}
            id={id}
            placeholder={props.placeholder}
            name={props.name}
            ref={this.password}
          />
        ) : (
          <InputMask
            css={TextFieldStyle}
            id={id}
            placeholder={props.placeholder}
            name={props.name}
            mask={props.mask}
            maskChar={props.maskChar}
            ref={this.input}
          />
        )}

        <TextLabel
          className="form__label"
          htmlFor={id}
        >
          {props.placeholder}
        </TextLabel>
        <EmptyButton
          className="form__cancel"
          onClick={this.handleErase}
        />
      </TextGroup>
    );
  }
}

export default Text;
