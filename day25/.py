def execute(code: str) -> int:
  """
  Interpreta un lenguaje de programación simple con bucles y condicionales.

  Instrucciones:
  - '+': incrementa el valor
  - '-': decrementa el valor
  - '>': avanza sin operar
  - '[' y ']': bucle que se ejecuta mientras value != 0
  - '{' y '}': condicional que se ejecuta si value != 0

  Returns:
    El valor final después de ejecutar todas las instrucciones
  """
  instructions = list(code)
  value = 0
  pointer = 0

  # Fase 1: Preprocesamiento - construir mapa de saltos
  # Este mapa permite saltos O(1) entre delimitadores emparejados
  jumps = {}
  stack = []

  for idx, char in enumerate(instructions):
    if char in '[{':
      stack.append(idx)
    elif char in ']}':
      opening = stack.pop()
      jumps[opening] = idx  # Apertura -> Cierre
      jumps[idx] = opening  # Cierre -> Apertura

  # Fase 2: Ejecución - interpretar cada instrucción
  while pointer < len(instructions):
    instruction = instructions[pointer]
    next_pointer = pointer + 1  # Por defecto, avanza una posición

    if instruction == '+':
      # Incrementar valor y avanzar
      value += 1
    elif instruction == '-':
      # Decrementar valor y avanzar
      value -= 1
    elif instruction == '[':
      # Inicio de bucle: evalúa condición
      # Si value es 0, salta al final del bucle (después de ])
      if value == 0:
        next_pointer = jumps[pointer] + 1
    elif instruction == ']':
      # Fin de bucle: evalúa condición de continuación
      # Si value no es 0, vuelve al inicio del bucle (después de [)
      if value != 0:
        next_pointer = jumps[pointer] + 1
    elif instruction == '{':
      # Inicio de condicional: evalúa condición una sola vez
      # Si value es 0, salta al final del condicional (después de })
      # Si value no es 0, entra al bloque
      if value == 0:
        next_pointer = jumps[pointer] + 1
    elif instruction == '}':
      # Fin de condicional: no requiere evaluación
      # La decisión de ejecutar el bloque ya se tomó en '{'
      # Los condicionales no son bucles, solo se ejecutan una vez
      # Por lo tanto, simplemente avanza al siguiente instruction
      pass  # next_pointer ya está en pointer + 1
    # '>' y otros caracteres desconocidos: simplemente avanzan

    pointer = next_pointer

  return value