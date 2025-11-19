import * as fs from "fs";

const filesMap = new Map<string, Buffer | NodeJS.ArrayBufferView>();

type FsWithSetFileContent = typeof fs & {
  setFileContent: (path: string, content: string) => void;
};

export const fsStub: FsWithSetFileContent = {
  ...fs,
  setFileContent: (path: string, content: string): void => {
    filesMap.set(path, Buffer.from(content));
  },

  readFileSync: (path: fs.PathOrFileDescriptor, _options?: fs.WriteFileOptions): any => {
    const key = String(path);
    const content = filesMap.get(key);
    return content; 
  },

  writeFileSync: (file: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, _options?: fs.WriteFileOptions): void => {
    const key = String(file);
    let buffer: Buffer;

    if (typeof data === "string") {
      buffer = Buffer.from(data);
    } else if (Buffer.isBuffer(data)) {
      buffer = Buffer.from(data); 
    } else {
      buffer = Buffer.from(
        data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
      );
    }
    filesMap.set(key, buffer);
  }
};