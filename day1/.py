def filter_gifts(gifts):
  return gifts.filter(gifts => !gifts.includes("#"))
