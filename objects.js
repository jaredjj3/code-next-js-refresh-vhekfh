import { render } from './util';

// TODO: What is the value of foo.bar and foo.baz?
render('objects1', () => {
  const foo = {
    bar: 42,
  };
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// TODO: Create an object of objects and return it.
render('objects2', () => {
  const object3 = {
    apples: 'green',
  };
  return ```
  object3: ${object3.apples}
  
  sadfasdfisdfa ${'lol'}

  asdfjkasdhfkafsdh
  ```;
});

// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
  let pizza = ['dominoes', 10, 'pepperoni'];
  return pizza[0];
});
