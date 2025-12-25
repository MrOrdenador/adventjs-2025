def drop_gifts(warehouse: list[list[str]], drops: list[int]) -> list[list[str]]:
  newWareHouse = [row[:] for row in warehouse]
  rows = len(warehouse)
  
  for col in drops:
    for row in range(rows - 1, -1, -1):
      if newWareHouse[row][col] == ".":
        newWareHouse[row][col] = "#"
        break
  return newWareHouse
