/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  let counts = new Map()
  for (let letter of toy){
    const key = letter.toLowerCase()
    if (counts.has(key)){
      counts.set(key, {...counts.get(key), count: counts.get(key).count + 1})
    } else {
      counts.set(key, {count: 1, original: letter})
    }
  }
  for (let [_, value] of counts){
    if (value.count == 1) return value.original
  }
  return "" 
}