def elf_battle(elf1: str, elf2: str) -> int:
  hp1 = 3
  hp2 = 3

  for i in range(min(len(elf1), len(elf2))):
    m1 = elf1[i]
    m2 = elf2[i]

    dmg1 = 2 if m2 == "F" else 1 if m2 == "A" and m1 != "B" else 0
    dmg2 = 2 if m1 == "F" else 1 if m1 == "A" and m2 != "B" else 0

    hp1 -= dmg1
    hp2 -= dmg2

    if hp1 <= 0 or hp2 <= 0:
        if hp1 <= 0 and hp2 <= 0:
            return 0
        return 2 if hp1 <= 0 else 1

  if hp1 > hp2:
      return 1
  elif hp2 > hp1:
      return 2
  else:
      return 0
