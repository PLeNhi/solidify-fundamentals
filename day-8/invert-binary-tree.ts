import { createTree, TreeNode } from "./maximum-depth-of-binary-tree";

var invertTree = function(root: TreeNode | null): TreeNode | null {
    if(root === null) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right)
    return root;
};

const root = [4,2,7,1,3,6,9]
const nodeTree2 = [2,1,3]

const newTreeNode = createTree(root)
const newTreeNode2 = createTree(nodeTree2)

console.log(invertTree(newTreeNode))
console.log(invertTree(newTreeNode2))