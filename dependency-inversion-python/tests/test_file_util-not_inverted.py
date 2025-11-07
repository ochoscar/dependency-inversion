import tempfile
from pathlib import Path
from src.file_util_not_inverted import concatenate_files

def test_concatenate_files_creates_expected_output():
    with tempfile.TemporaryDirectory() as tmpdir:
        # Given
        tmp = Path(tmpdir)

        file1 = tmp / "a.txt"
        file2 = tmp / "b.txt"
        dest = tmp / "out.txt"

        file1.write_text("Hello ")
        file2.write_text("World!")

        # When
        concatenate_files(file1, file2, dest)

        # Then
        result = dest.read_text()
        assert result == "Hello World!"
