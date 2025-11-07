from src.path_contract import PathContract

class PathStub(PathContract):
    def __init__(self, content):
        self.content = content

    def read_bytes(self) -> bytes:
        return self.content
    
    def write_bytes(self, data) -> int:
        self.content = data
        return 0


    