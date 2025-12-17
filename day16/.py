def pack_gifts(gifts: list[int], maxWeight: int) -> int | None:
  if not len(gifts): return 0
  sleighCount = 1
  currentWeight = 0

  for giftWeight in gifts:
    if (giftWeight > maxWeight): return None
    if giftWeight + currentWeight > maxWeight:
      currentWeight = giftWeight
      sleighCount += 1
    else:
      currentWeight += giftWeight
  return sleighCount