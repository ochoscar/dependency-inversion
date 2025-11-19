import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { concatenateFiles } from "../src/fileUtilNotInverted";

describe("concatenateFiles", () => {
  it("should concatenate two real files correctly", () => {
    // Given
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "concat-test-"));

    const file1 = path.join(tmpDir, "a.txt");
    const file2 = path.join(tmpDir, "b.txt");
    const dest = path.join(tmpDir, "out.txt");

    fs.writeFileSync(file1, "Hello ");
    fs.writeFileSync(file2, "World!");

    // When
    concatenateFiles(file1, file2, dest);
    const result = fs.readFileSync(dest, "utf8");

    // Then
    expect(result).toBe("Hello World!");
  });
});