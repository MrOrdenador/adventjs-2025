# Day 4: 🧮 Decipher the Santa PIN

The elves have found the **encrypted code** that protects the door to Santa’s workshop 🔐.  
The PIN has **4 digits**, and it is hidden inside blocks like these:

```
[1++][2-][3+][<]
```

## 📝 Instructions

Write a function that deciphers the PIN from the code.

- The code is made up of blocks between brackets `[...]`.
- Each block generates **one digit** of the PIN.
- A normal block has the form `[nOP...]`, where:
  - `n` is a number (0-9)
  - `OP` is a list of optional operations applied in order:
    - `+` adds 1
    - `-` subtracts 1
- The result is always a single digit (mod 10 arithmetic), e.g.:
  - `9 + 1 → 0`
  - `0 - 1 → 9`
- Special block `[<]` repeats the digit from the previous block.
- If in the end there are fewer than 4 digits, return `null`.

## 🧩 Examples

```
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null  (only 2 digits)
```
