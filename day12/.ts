function elfBattle(elf1: string, elf2: string): number {
  let elfsHP: number[] = [3, 3];
  const rounds: number = Math.min(elf1.length, elf2.length);

  const damageTable: Record<string, Record<string, number>> = {
    A: { B: 0, A: -1, F: -1 },
    F: { B: -2, A: -2, F: -2 },
  };

  function calcDamage(attackMove: string, defenseMove: string): number {
    return damageTable[attackMove]?.[defenseMove] ?? 0;
  }

  for (let i = 0; i < rounds; i++) {
    elfsHP[1] += calcDamage(elf1[i], elf2[i]);
    elfsHP[0] += calcDamage(elf2[i], elf1[i]);

    if (elfsHP[0] <= 0 || elfsHP[1] <= 0) {
      if (elfsHP[0] <= 0 && elfsHP[1] <= 0) return 0;
      return elfsHP[0] <= 0 ? 2 : 1;
    }
  }

  if (elfsHP[0] > elfsHP[1]) return 1;
  if (elfsHP[1] > elfsHP[0]) return 2;
  return 0;
}
