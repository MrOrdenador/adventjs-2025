/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (!gifts.length) return 0;
  let sleighCount = 1;
  let currentWeight = 0;

  for (let giftWeight of gifts){
    if (giftWeight > maxWeight) return null 
    if (giftWeight + currentWeight > maxWeight){
      currentWeight = giftWeight
      sleighCount += 1
    } else {
      currentWeight += giftWeight
    }
  }
  return sleighCount
}
