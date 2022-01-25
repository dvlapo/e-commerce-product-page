/* eslint-disable prettier/prettier */
import { helper } from '@ember/component/helper';

function equal(args) {
  let [prop1, prop2] = args;
  return prop1 === prop2;
}

export default helper(equal);
