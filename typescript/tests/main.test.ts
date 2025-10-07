import { helloWorld } from "../src/main";

test("should return hello world message", () => {
  expect(helloWorld()).toBe("Hello, Dependency Inversion in TypeScript!");
});
