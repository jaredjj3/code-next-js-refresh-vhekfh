import { render } from './util';

// TODO: What is the value of foo?
render('variables1', () => {
  let foo = 'foo1';
  foo = 'foo2';
  return foo;
});

// TODO: Fix this code.
render('variables2', () => {
  let bar = 'bar';
  bar = 'bar';
  return bar;
});

// TODO: Fix this code.
render('variables3', () => {
  let baz = 'baz';
  baz = 3;
  return baz;
});
