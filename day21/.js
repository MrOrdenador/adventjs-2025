function clearGifts(warehouse, drops) {
  const rows = warehouse.length
  const cols = warehouse[0].length
  let newWarehouse = warehouse.map(row => [...row])

  for (const col of drops) {
    let placedRow = -1
    for (let row = rows - 1; row >= 0; row--) {
      if (newWarehouse[row][col] === ".") {
        newWarehouse[row][col] = "#"
        placedRow = row
        break
      }
    }

    if (placedRow != -1 && newWarehouse[placedRow].every(cell => cell === "#")) {
      newWarehouse.splice(placedRow, 1)
      newWarehouse.unshift(new Array(cols).fill("."))
    }
  }

  return newWarehouse
}
