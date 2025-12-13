function elfBattle(elf1: string, elf2: string): number {
  let hp1 = 3
  let hp2 = 3

  for (let i = 0; i < Math.min(elf1.length, elf2.length); i++){
    const m1 = elf1[i]
    const m2 = elf2[i]

    const dmg1 = (m2 === "A" && m1 !== "B" ? 1 : 0) + (m2 === "F" ? 2 : 0)
    const dmg2 = (m1 === "A" && m2 !== "B" ? 1 : 0) + (m1 === "F" ? 2 : 0)

    hp1 -= dmg1
    hp2 -= dmg2

    if (hp1 <= 0 || hp2 <= 0){
      return hp1 <= 0 && hp2 <= 0 ? 0 : hp1 <= 0 ? 2 : 1
    }
  }
  return hp1 > hp2 ? 1 : hp2 > hp1 ? 2 : 0
}