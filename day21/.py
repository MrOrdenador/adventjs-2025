def clear_gifts(warehouse: list[list[str]], drops: list[int]) -> list[list[str]]:
  rows = len(warehouse)
  cols = len(warehouse[0])
  newWarehouse = [row[:] for row in warehouse]

  for col in drops:
    placedRow = -1
    for row in range(rows-1, -1, -1):
      if newWarehouse[row][col] == ".":
        newWarehouse[row][col] = "#"
        placedRow = row
        break

    if placedRow != -1 and all(cell == "#" for cell in newWarehouse[placedRow]):  
      newWarehouse.pop(placedRow)
      newWarehouse.insert(0, ["." for _ in range(cols)])

  return newWarehouse
