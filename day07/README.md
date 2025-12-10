# Day 7: 🎄 Decorating the tree

It’s time to decorate the **Christmas tree**!  
Your goal is to create a function that draws a centered tree made of asterisks `*` and replaces some of them with a custom ornament.

## 📝 Instructions

You must write a function that receives:

- `height` → the number of rows the tree will have.
- `ornament` → the character used as decoration (e.g., `"o"`, `"@"`, `"+"`).
- `frequency` → how often an ornament replaces a `*`, based on the global position count.

### How decorations work

- The tree is formed by `*`, but **every `frequency` positions**, the `*` must be replaced with the ornament.
- Position counting starts at **1**, going from **top to bottom**, **left to right**.
- The tree must be **centered**.
- At the end, the tree must have a **one-line trunk** centered at the bottom represented by `#`.

## 🧩 Examples

```javascript
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #
