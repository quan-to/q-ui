// @flow
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import uniqid from 'uniqid';
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      canValidate: false,
      type: this.props.type,
      isInputPassword: this.props.type === 'password',
      valueToShow: this.props.getValue() || '',
      helperIcon: this.props.helperIcon,
    };
    this.changeValue = this.changeValue.bind(this);
    this.canValidateOnBlur = this.canValidateOnBlur.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setMaxLength(value, length) {
    return value.substring(0, length);
  }

  setRef(input) {
    if (this.props.getRef) {
      this.props.getRef(input);
    }
  }

  changeValue(evt) {
    let value = evt.currentTarget.value;
    let valueToShow = '';

    const { canValidate } = this.state;
    const { validations, removeMask, mask } = this.props;

    value = removeMask ? removeMask(value) : value;
    value = mask ? mask(value) : value;

    if ((validations || {}).isCreditCard) {
      this.creditCardFlag(value);
    }

    valueToShow = value;
    this.props.setValue(value);

    if (!this.isEmpty(value) && canValidate) {
      this.setState({ canValidate: true, valueToShow });
    } else {
      this.setState({ canValidate: false, valueToShow });
    }

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  isEmpty(value) {
    return !(value && value.length > 0);
  }

  canValidateOnBlur(evt) {
    const value = evt.currentTarget.value;

    if (this.isEmpty(value)) {
      this.setState({ canValidate: false });
    } else {
      this.setState({ canValidate: true });
    }
  }

  togglePasswordVisibility() {
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text',
    });
  }

  render() {
    const { getValue } = this.props;
    const { valueToShow } = this.state;
    const inputValue = getValue() ? valueToShow : '';
    const errorClass = !this.props.isValid() && this.props.isFormSubmitted() ? 'error' : '';

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

    return (
      <div
        className={`form-group ${this.props.className} ${errorClass}`}
        data-error={this.props.getErrorMessage() || this.props.errorMessage}
      >
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>

        <input
          className="transition border-radius"
          placeholder={this.props.placeholder || ''}
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          onChange={this.changeValue}
          onBlur={this.canValidateOnBlur}
          disabled={this.props.disabled}
          maxLength={this.props.maxLength}
          value={getValue() || inputValue}
          ref={(input) => {
            this.setRef(input);
          }}
          autoComplete={this.props.autocomplete}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  name: '',
  className: '',
  statusIcon: false,
  successFeedback: false,
  validations: {},
  value: '',
  canValidate: false,
  maxlength: ''
};

export default Input;
