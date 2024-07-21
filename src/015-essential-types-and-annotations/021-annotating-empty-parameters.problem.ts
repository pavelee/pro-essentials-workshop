import { Expect, Equal } from "@total-typescript/helpers";

// CODE

// if we do not excpilitly say it's any typescript will throw an error

const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(" ");
};

// TESTS

const result = concatTwoStrings("Hello", "World");

type test = Expect<Equal<typeof result, string>>;
