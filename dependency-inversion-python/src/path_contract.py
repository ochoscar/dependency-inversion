from abc import ABC, abstractmethod

class PathContract(ABC):
    @abstractmethod
    def read_bytes(self) -> bytes:
        pass

    @abstractmethod
    def write_bytes(self, data) -> int:
        pass
