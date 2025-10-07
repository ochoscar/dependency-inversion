export function helloWorld(): string {
  return "Hello, Dependency Inversion in TypeScript!";
}

if (require.main === module) {
  console.log(helloWorld());
}
