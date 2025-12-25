type TreeNode = {
  value: string
  left?: TreeNode
  right?: TreeNode
}

function isTreesSynchronized(
  tree1?: TreeNode,
  tree2?: TreeNode
): [boolean, string | undefined] {
  function areMirror(a: TreeNode, b: TreeNode): boolean {
    if (!a && !b) return true
    if (!a || !b) return false
    if (a.value !== b.value) return false
    return areMirror(a.left, b.right) && areMirror(a.right, b.left)
  }

  const synchronized = areMirror(tree1, tree2)
  return [synchronized, tree1?.value]
}
