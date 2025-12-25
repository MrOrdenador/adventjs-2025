function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  let newWareHouse = warehouse.map(row => [...row])
  const rows = warehouse.length
  
  for (const col of drops){
    for (let row = rows - 1; row >= 0; row--){
      if (newWareHouse[row][col] == "."){
        newWareHouse[row][col] = "#"
        break
      }
    }
  }

  return newWareHouse
}
