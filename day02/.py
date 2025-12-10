def manufacture_gifts(gifts_to_produce):
  result = []

  for item in gifts_to_produce:
    if item["quantity"] > 0:
      result.extend([item["toy"]] * [item["quantity"]])
      
    """
      Another option would be 
      for item in gifts_to_produce:
        result.extend([item["toy"]] * max([item["quantity"]], 0))
    """
    
  return result
