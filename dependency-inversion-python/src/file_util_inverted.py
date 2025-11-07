from pathlib import Path
from src.path_contract import PathContract

def concatenate_files(source1: PathContract, source2: PathContract, destination: PathContract) -> None:
    bytes1 = source1.read_bytes()
    bytes2 = source2.read_bytes()
    files = bytes1 + bytes2
    destination.write_bytes(files)
    