function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
  ): string[]  {
  let result : Array<string> = []
  giftsToProduce.forEach(
    item => {
      if (item.quantity == 1){
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