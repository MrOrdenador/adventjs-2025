/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  for (const key in workshop){
    if (workshop[key] == gift){
      return [key]
    }
    if (typeof workshop[key] == "object" && workshop[key] != null){
      const path = findGiftPath(workshop[key], gift)
      if (path.length > 0){
        return [key, ...path]
      }
    }
  }
  return [];
}
