def manufacture_gifts(gifts_to_produce):
  result = []

  for item in gifts_to_produce:
    quantity = item["quantity"]
    toy = item["toy"]

    if type(quantity) == int and quantity > 0:
      result.extend([toy] * quantity)

  return result
