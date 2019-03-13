// @flow
import React, { Component } from 'react';
import { createStore } from 'nucleojs';
import contracts from './contracts';
import type { StoreType } from './types/store';

const store:StoreType = createStore({
  ...contracts
});

/*
 * @function receptor
 * receptor is a abstraction to receive the component and give to it the store powers and access safely, receiving the requested states and all Nucleo functionalities. We gonna move it to a library in Quanto as soon we find a proper form to isolate it.
 * @param contracts: string[].
 */

type NucleoListenerType = {
  contractName: string,
  data: any
};

export function receptor(contracts:Array<string>) {
  let state = {}
  for (let i = 0; contracts.length > i; i++) {
    state[contracts[i]] = {};
  }
  function listener({ contractName, data }:NucleoListenerType) {
    state[contractName] = data
  }

  store.subscribe(listener);
  return (Comp:any) => {
    class Receptor extends Component<{}, any> {
      constructor() {
        super();
        this.state = state;
      }

      componentDidMount() {
        this.setState(state);
        store.subscribe(this.listener);
      }

      listener = ({ contractName, data }:NucleoListenerType) => {
        this.setState(prev => {
          prev[contractName] = data;
          return {
            ...prev
          };
        });
      }

      render() {
        return (
          <Comp
            {...this.props}
            {...state}
            dispatch={store.dispatch}
            update={store.update}
            cloneState={store.cloneState}
          />
        );
      }
    }
    return Receptor;
  }
}

export default store;
