export function has(object, key) {
  return object ? hasOwnProperty.call(object, key) : false;
}
