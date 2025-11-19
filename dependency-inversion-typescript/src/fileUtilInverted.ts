import * as fs from "fs";

export function concatenateFiles(
  source1: string, 
  source2: string, 
  destination: string, 
  fsContract: typeof fs
): void {
  const bytes1 = fsContract.readFileSync(source1);
  const bytes2 = fsContract.readFileSync(source2);
  const concatenated = Buffer.concat([bytes1, bytes2]);
  fsContract.writeFileSync(destination, concatenated);
}