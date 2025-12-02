function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
  ): string[]  {
  let result = []
  giftsToProduce.forEach(
    item => {
      if (item.quantity == 1){
        result.push(item.toy)
      } else if (item.quantity > 1){
        let i = item.quantity;
        while (i > 0){
          result.push(item.toy)
          i = i - 1
        }
      }
    }
  )
  return result
}