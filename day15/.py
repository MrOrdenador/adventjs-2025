def draw_table(data: list[dict[str, str | int]], sortBy: str) -> str:
  if not data or len(data) == 0:
    return ""

  keys = list(data[0].keys())

  def sort_key(row):
    val = row[sortBy]
    if isinstance(val, (int, float)):
      return (0, val)
    else:
      return (1, str(val))

  sorted_data = sorted(data, key=sort_key)

  widths = {}
  for key in keys:
    widths[key] = 0

  for row in sorted_data:
    for key in keys:
      widths[key] = max(widths[key], len(str(row[key])))

  border_segments = ["+" + "-" * (widths[key] + 2) for key in keys]
  border_row = "".join(border_segments) + "+"

  header_segments = []
  for i, key in enumerate(keys):
    header = chr(65 + i)  # Idea taken from Bryan Herrera
    padding = " " * (widths[key] - len(header) + 1)
    header_segments.append("| " + header + padding)
  header_row = "".join(header_segments) + "|"

  data_row_list = []
  for row in sorted_data:
    segments = []
    for key in keys:
      value = str(row[key])
      total_width = widths[key] + 1
      padding = " " * max(0, total_width - len(value))
      segments.append("| " + value + padding)
    data_row_list.append("".join(segments) + "|")
  data_rows = "\n".join(data_row_list)

  return "\n".join([
    border_row,
    header_row,
    border_row,
    data_rows,
    border_row
  ])