
type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
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
