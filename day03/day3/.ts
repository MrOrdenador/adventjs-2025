function drawGift(size: number, symbol: string): string {
  if (size <= 1) return "";

  let box = symbol.repeat(size) + "\n";
  for (let i = 0; i < size-2; i++){
    box += symbol + " ".repeat(size-2) + symbol + "\n"
  }
  box += symbol.repeat(size)

  return box
}