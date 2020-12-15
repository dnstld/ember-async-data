import { helper } from '@ember/component/helper';

export function load(somePromise) {
  return somePromise;
}

export default helper(([promise]) => load(promise));
