import * as fs from "fs";

export function concatenateFiles(source1: string, source2: string, destination: string): void {
  const bytes1 = fs.readFileSync(source1);
  const bytes2 = fs.readFileSync(source2);
  const concatenated = Buffer.concat([bytes1, bytes2]);
  fs.writeFileSync(destination, concatenated);
}