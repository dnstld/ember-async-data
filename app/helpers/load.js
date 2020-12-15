import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';

class AsyncData {
  /**
    @type {'LOADING' | 'LOADED' | 'ERROR'}
    @private
  **/
  @tracked _state = 'LOADING';

  /** @private */
  @tracked _value;

  /** @private */
  @tracked _error;

  get state() {
    return this._state;
  }

  get value() {
    assert(
      `You can only access 'value' when 'state' is 'LOADED', but it is ${this.state}`,
      this.state === 'LOADED'
    );

    return this._value;
  }

  get error() {
    assert(
      `You can only access 'error' when 'state' is 'ERROR', but it is ${this.state}`,
      this.state === 'ERROR'
    );

    return this._error;
  }

  get isLoading() {
    return this.state === 'LOADING';
  }

  get isLoaded() {
    return this.state === 'LOADED';
  }

  get isError() {
    return this.state === 'ERROR';
  }
}

export function load(somePromise) {
  return new AsyncData();
}

export default helper(([promise]) => load(promise));
