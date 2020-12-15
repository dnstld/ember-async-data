import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

class AsyncData {
  /**
    @type {'LOADING' | 'LOADED' | 'ERROR'}
    @private
  **/
  _state = 'LOADING';

  /** @private */
  _value;

  /** @private */
  _error;

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
}

export function load(somePromise) {
  return new AsyncData();
}

export default helper(([promise]) => load(promise));
