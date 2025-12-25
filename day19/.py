def reveal_santa_route(routes: list[list[str]]) -> list[str]:
  route_map = {}
  origins = set()
  destinations = set()
  result = []

  for origin, destination in routes:
    route_map[origin] = destination
    origins.add(origin)
    destinations.add(destination)

  start_points = origins - destinations
  if not start_points:
    raise ValueError("No se puede determinar el inicio de la ruta")
  current = start_points.pop()

  while current:
    result.append(current)
    current = route_map.get(current)

  return result
