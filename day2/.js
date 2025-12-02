/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  let result = []
  giftsToProduce.forEach(
    item => {
      if (item.quantity == 1) {
        result.push(item.toy)
      } else if (item.quantity > 1){
        let i = item.quantity;
        while (i > 0){
          result.push(item.toy)
          i--
        }
      }
    }
  )
  return result
}