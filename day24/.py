def is_trees_synchronized(tree1, tree2):
  def areMirror(a, b):
    if not a and not b: return True
    if not a or not b: return False
    if a.value != b.value: return False

    return areMirror(a.left, b.right) and areMirror(a.right, b.left)
  return [areMirror(tree1, tree2), tree1.value]
  