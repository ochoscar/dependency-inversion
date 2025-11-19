from pathlib import Path

def concatenate_files(source1: Path, source2: Path, destination: Path) -> None:
    bytes1 = source1.read_bytes()
    bytes2 = source2.read_bytes()
    concatenate_files = bytes1 + bytes2
    destination.write_bytes(concatenate_files)

if __name__ == "__main__":
    concatenate_files(Path("a.txt"), Path("b.txt"), Path("out.txt"))1