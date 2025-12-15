type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  for (const key in workshop){
    if (workshop[key] == gift){
      return [key]
    }
    if (typeof workshop[key] == "object" && workshop[key] != null){
      const path = findGiftPath(workshop[key], gift)
      if (path.length > 0){
        return [key, ...path]
      }
    }
  }
  return [];
}
