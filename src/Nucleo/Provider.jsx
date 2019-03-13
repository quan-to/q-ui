// @flow

import React, { Component } from 'react';

type StoreType = {
  dispatch: Function,
  update: Function,
  cloneState: Function,
  subscribe: Function
}

type PropsType = {
  store: StoreType,
  children: any
};

type StateType = {
  store: StoreType | {}
}

export class Provider extends Component<PropsType, StateType> {
  constructor(props:PropsType) {
    super();
    this.state = { store: {} }
  }

  componentDidMount() {
    this.props.store.subscribe(this.listener);
  }

  listener = ({ contractName, data }: { contractName: string, data: any }) => {
    this.setState(prev => {
      prev.store[contractName] = data;
      return {
        ...prev
      };
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
