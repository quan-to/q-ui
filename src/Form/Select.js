import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.toggleValue = this.toggleValue.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.state = {
      maskText: this.props.selectMask || 'Carregando...',
    };
  }

  componentWillMount() {
    const currentOptions = this.props.options;
    const currentValue = this.props.value;
    const selected = currentOptions.filter(option => currentValue === option.value)[0];
    const maskText = selected ? selected.text : (this.props.selectMask || '');
    const selectValue = selected ? selected.value : '';

    this.setState({ maskText });
    this.props.setValue(selectValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const currentOptions = nextProps.options;
      const currentValue = nextProps.value;
      const selected = currentOptions.filter(option => currentValue === option.value)[0];
      const maskText = selected ? selected.text : nextProps.selectMask;
      const selectValue = selected ? selected.value : '';

      this.setState({ maskText });
      this.props.setValue(selectValue);
    }
  }

  renderOption(option, i) {
    if(option.disabled) {
      return (
        <option data-text={option.text} key={i + 1} value={option.value} disabled>
          {option.text}
        </option>
      );
    }

    return (
      <option data-text={option.text} key={i + 1} value={option.value}>
        {option.text}
      </option>
    );
  }

  toggleValue(evt) {
    const target = evt.currentTarget;
    const targetText = target.options[target.selectedIndex].text;
    this.props.setValue(target.value);
    this.setState({
      maskText: ((targetText === '') ? this.props.selectMask : targetText),
    });
    if (this.props.changeCallback) {
      this.props.changeCallback(evt.currentTarget);
    }
  }

  render() {
    const { options, name, label, hasDefaultOption = true } = this.props;
    const { maskText } = this.state;
    const errorClass = (!this.props.getValue() || this.props.getValue().includes("Selecione")) && this.props.isFormSubmitted() ? 'error' : '';
    const actualColor = (!this.props.getValue() || this.props.getValue().includes("Selecione")) ? "" : "black";
    const labelElement =
      label ? (<label htmlFor={name}>{label}</label>) : '';

    return (
      <div className={`form-group ${this.props.className} ${errorClass}`} data-error={this.props.errorMessage}>
        <div className="SelectWrapper">
          {labelElement}
          <select
            className="FormControl"
            onChange={this.toggleValue}
            value={this.props.getValue() || ''}
            id={name}
            aria-label={name}
            disabled={this.props.disabled}
          >

            {hasDefaultOption ? <option value="-1">Selecione</option> : false}

            {this.props.nullOption ? (<option />) : null}
            {options.map(
              (option, i) => this.renderOption(option, i)
            )}
          </select>
          <div className={`SelectMask ${actualColor}`}>
            {maskText}
            <span className="arrows">
              <img src="/icons/arrow-down.svg" alt="arrow" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withFormsy(Select);
