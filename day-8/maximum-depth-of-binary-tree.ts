export class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val: number) { this.val = val; this.left = null , this.right = null }
}

export function createTree(arr:(number | null)[]): TreeNode {
    // if (!arr || arr.length === 0) return null;

    const root = new TreeNode(arr[0] as number);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift();

        if(!current) return root;

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i] as number);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]  as number);
            queue.push(current.right);
        }
        i++;
    }
    return root;
}

var maxDepth = function(root: TreeNode | null): number {
    if(root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const root = [3,9,20,null,null,15,7];
const nodeTree2 = [1,null,2];

const newTreeNode = createTree(root)
const newTreeNode2 = createTree(nodeTree2)

console.log(maxDepth(newTreeNode))
console.log(maxDepth(newTreeNode2))
