def manufacture_gifts(gifts_to_produce):
  result = []

  for item in gifts_to_produce:
    if item["quantity"] > 0:
      result.extend([item["toy"]] * [item["quantity"]])
  return result