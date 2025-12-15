def find_gift_path(workshop: dict, gift: str | int | bool) -> list[str]:
  for key in workshop:
    if workshop[key] == gift:
      return [key]
    if isinstance(workshop[key], dict) and workshop[key] is not None:
      path = find_gift_path(workshop[key], gift)
      if len(path) > 0:
        return [key] + path
  return [];
