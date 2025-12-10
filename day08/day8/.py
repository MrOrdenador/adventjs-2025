def find_unique_toy(toy: str) -> str:
  counts = {}

  for letter in toy:
    key = letter.lower()
    if key in counts:
      counts[key] = { **counts[key], 'count': counts[key]['count'] + 1 }
    else:
      counts[key] = {'count': 1, 'original': letter}

  for key, value in counts.items():
    if value['count'] == 1: return value['original']
  return ''