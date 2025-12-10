/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  code = code.slice(1, code.length - 1)
  code = code.split('][')
  if (code.length !== 4) return null
  
  let string = ""
  
  for (let hole of code) {
    
    if (hole === "<") {
      if (hole.length < 0) return null 
      string = string + string.at(-1)
      continue
    }
    
    let total = Number(hole[0])
    for (let i = 0; i < hole.length; i++){
      let char = hole[i]
      if (char == "+"){
        total = (total + 1)%10
      } else if (char == "-"){
        total = (total + 9)%10
      }
    }
    string = string + Number(total)
  }
  return string
}
