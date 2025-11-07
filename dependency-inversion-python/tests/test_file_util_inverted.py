from src.file_util_inverted import concatenate_files
from tests.path_stub import PathStub
import unittest

class TestFileUtilInverted(unittest.TestCase):
    def test_concatenate_files_creates_expected_output(self):
        # Given
        expected = b"Hello world!"
        source1 = PathStub(b"Hello")
        source2 = PathStub(b" world!")
        destination = PathStub(b"")

        # When
        concatenate_files(source1, source2, destination)

        # Then
        self.assertEqual(destination.read_bytes(), expected)