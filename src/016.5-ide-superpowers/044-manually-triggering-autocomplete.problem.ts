type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  bar: 123,
  baz: true,
  foo: "hello",
});

document.addEventListener(
  // Autocomplete this string!
  "click",
  (event) => {
    console.log(event);
  },
);
