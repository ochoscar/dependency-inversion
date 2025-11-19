import { concatenateFiles } from "../src/fileUtilInverted";
import { fsStub } from "./fsStub";

describe("concatenateFiles", () => {
  it("should concatenate two real files correctly", () => {
    // Given
    const source1 = "source1.txt";
    const source2 = "source2.txt";
    const destination = "destination.txt";
    fsStub.setFileContent(source1, "Hello ");
    fsStub.setFileContent(source2, "World!");
    
    // When
    concatenateFiles(source1, source2, destination, fsStub)
    const result = String(fsStub.readFileSync(destination));

    // Then
    expect(result).toBe("Hello World!");    
  });
});