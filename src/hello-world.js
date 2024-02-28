import isOdd from 'is-odd';

export function hello (name) {
  return `Hello ${name}. Is 42 odd? ${isOdd(42)}`;
}
