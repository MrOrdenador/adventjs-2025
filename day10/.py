def max_depth(s: str) -> int:
  intensity = maxIntensity = 0
  for char in s:
    if char == "[":
      intensity += 1
      if intensity > maxIntensity: maxIntensity += 1
    elif char == "]":
      intensity -= 1
      if intensity < 0: return -1
  if intensity != 0: return -1
  return maxIntensity if maxIntensity > 0 else -1


