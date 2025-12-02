/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  let result = [];
  giftsToProduce.forEach((item) => {
    if (item.quantity == 1) {
      result.push(item.toy);
    } else if (item.quantity > 1) {
      let i = item.quantity;
      while (i > 0) {
        result.push(item.toy);
        i--;
      }
    }
  });
  /*
    A shorter and cleaner option would be to use
    giftsToProduce.flatMap(gift => Array(Math.max(0, gift.quantity)).fill(gift.toy))
  */
  return result;
}
