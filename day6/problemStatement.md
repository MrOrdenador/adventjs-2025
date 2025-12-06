# Day 6: 🧤 Matching Gloves

In Santa's workshop, the elves have found **a mountain of magical gloves** completely disorganized.
Each glove is described by two values:

* `hand`: indicates whether it is a left glove (`L`) or a right glove (`R`)
* `color`: the color of the glove (string)

## 📝 Instructions

Your task is to help them **match gloves**:
A valid pair is a left glove and a right glove **of the same color**.

You must return **a list with the colors of all the pairs found**.
Keep in mind that **there can be several pairs of the same color**.

## 🧩 Examples

```javascript
const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []
```
