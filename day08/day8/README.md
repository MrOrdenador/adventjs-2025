# Day 8: 🎁 Find the unique toy

Santa 🎅 wants to know what the **first non-repeated letter** is in a toy's name 🎁.  
Your goal is to write a function that identifies this letter, **ignoring uppercase and lowercase when counting**, but returning it **as it appears in the string**.

## 📝 Instructions

You must write a function that receives:

- `toy` → a string representing the toy's name.

### Rules

- Count letters **case-insensitively** (e.g., `A` and `a` are considered the same).  
- Return the **first letter that is not repeated** in the string.  
- Return the letter **exactly as it appears** in the original string.  
- If no unique letter exists, return an **empty string** (`""`).

---

## 🧩 Examples

```javascript
findUniqueToy('Gift')       // 'G'
// ℹ️ The 'G' is the first letter that is not repeated
// and we return it exactly as it appears

findUniqueToy('sS')          // ''
// ℹ️ Both letters are repeated (case-insensitive)

findUniqueToy('reindeeR')    // 'i'
// ℹ️ 'r' and 'e' are repeated, first unique is 'i'

findUniqueToy('AaBbCc')      // ''
// ℹ️ All letters are repeated

findUniqueToy('abcDEF')      // 'a'
// ℹ️ 'a' is the first unique letter

findUniqueToy('aAaAaAF')     // 'F'
// ℹ️ 'F' is the first non-repeated letter

findUniqueToy('sTreSS')      // 'T'
// ℹ️ 's' and 'S' are repeated, first unique is 'T'

findUniqueToy('z')           // 'z'
// ℹ️ Only one letter, so it's unique
