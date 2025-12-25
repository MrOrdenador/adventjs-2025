def pack_gifts(gifts: list[int], max_weight: int) -> int | None:
  # ps: Ik the original arg was maxWeight but I j made it more pythronic
  if not len(gifts): return 0
  sleigh_count = 1
  current_weight = 0

  for gift_weight in gifts:
    if (gift_weight > max_weight): return None
    if gift_weight + current_weight > max_weight:
      current_weight = gift_weight
      sleigh_count += 1
    else:
      current_weight += gift_weight
  return sleigh_count