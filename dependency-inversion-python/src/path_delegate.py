from pathlib import Path
from abc import ABC

class PathDelegate(Path):
    def read_bytes(self) -> bytes:
        return super().read_bytes()

    def write_bytes(self, data) -> int:
        return super().write_bytes(data)