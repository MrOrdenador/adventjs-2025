/**
 * Executes a program written in the magical language.
 *
 * The interpreter is intentionally minimalistic: it operates directly on the
 * source string without any preprocessing or AST generation, reflecting the
 * lightweight nature of the language specification.
 *
 * @param code - Program to interpret
 * @returns The resulting numeric value after full execution
 */
export function execute(code: string): number {
  // The language definition states execution always starts at 0,
  // so we maintain a single accumulator representing the current value.
  let total = 0

  // Instruction pointer that moves sequentially through the program.
  // Managing it explicitly allows simple and predictable control-flow jumps.
  let i = 0

  /**
   * Instruction dispatch table.
   *
   * This map keeps the interpreter loop extremely compact and makes it easy
   * to extend the language in the future by just adding new handlers.
   * Each instruction encapsulates its own behavior to keep concerns separated.
   */
  const functions: Record<string, () => void> = {
    // "+" increases the current value; using ++ keeps the operation atomic and expressive
    "+": () => total++,

    // "-" decreases the current value; mirrors the "+" operator for symmetry
    "-": () => total--,

    // "[" begins a loop. When the value is zero, there is no work to be done,
    // so we jump directly to the matching closing bracket to skip the body.
    // By searching forward from the current position, we avoid unnecessary scans.
    "[": () => total === 0 && (i = code.indexOf("]", i)),

    // "]" ends a loop. If the current value is non-zero, the semantics dictate
    // repetition; jumping back to the matching "[" efficiently restarts the loop.
    "]": () => total !== 0 && (i = code.lastIndexOf("[", i)),

    // "{" starts a conditional region. When the current value is zero, the block
    // is not relevant, so execution jumps to the closing brace to continue after it.
    "{": () => total === 0 && (i = code.indexOf("}", i)),

    // "}" simply acts as a structural delimiter. No explicit action is required
    // because normal sequential execution naturally resumes after the block.
    "}": () => {}
  }

  // Main interpreter loop: walks through the program from left to right.
  while (i < code.length) {
    const instruction = code[i]

    // Dispatch the instruction if it exists in the language definition.
    // Unsupported characters are safely ignored, allowing flexibility in input
    // (such as whitespace or comments) without interrupting execution.
    functions[instruction]?.()

    // Advance to the next instruction. Control-flow instructions may also
    // modify `i`, and this increment harmonizes cleanly with those jumps.
    i++
  }

  // After processing every instruction, the final accumulated value represents
  // the program’s observable result as defined in the specification.
  return total
}
