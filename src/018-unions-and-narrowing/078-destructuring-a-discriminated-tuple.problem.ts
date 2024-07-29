import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
};

type ErrorApiResponse = ['error', string];
type SuccessApiResponse = ['success', User[]];

type ApiResponse = ErrorApiResponse | SuccessApiResponse;

type ApiResponse1 = {
  status: 'error',
  value: string
} | {
  status: 'success',
  value: User[]
}

async function fetchData(): Promise<ApiResponse1> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return {
        status: "error",
        // Imagine some improved error handling here
        value: "An error occurred",
      };
    }

    const data = await response.json();
    return {
      status: "success",
      value: data
    }
  } catch (error) {
    return {
      status: "error",
      // Imagine some improved error handling here
      value: "An error occurred",
    };
  }
}

async function exampleFunc() {
  const { status, value } = await fetchData();

  if (status === "success") {
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.error(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}
