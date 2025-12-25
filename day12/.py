def elf_battle(elf1: str, elf2: str) -> int:
  hp1, hp2 = 3, 3

  damage_table = {
    'A': {'B': 0, 'A': -1, 'F': -1},
    'F': {'B': -2, 'A': -2, 'F': -2}
  }

  def calc_damage(attack, defense):
    # In case the move is invalid
    if attack not in damage_table or defense not in damage_table[attack]:
      return 0
    return damage_table[attack][defense]

  for move1, move2 in zip(elf1, elf2):
    damage_to_hp2 = calc_damage(move1, move2)
    damage_to_hp1 = calc_damage(move2, move1)
    
    hp2 += damage_to_hp2
    hp1 += damage_to_hp1

    if hp1 <= 0 or hp2 <= 0:
      break

  if hp1 == hp2:
    return 0
  return 1 if hp1 > hp2 else 2
