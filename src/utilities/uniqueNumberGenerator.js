export default function uniqueNumberGenerator() {
  const array = new Uint32Array(1);

  window.crypto.getRandomValues(array);

  return array[0];
}
