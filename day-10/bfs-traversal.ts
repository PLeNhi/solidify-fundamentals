function bfs(graph: Graph, startNode: number): void {
  const queue: number[] = [startNode];
  const visited = new Set<number>([startNode]);

  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(`Duyệt đỉnh: ${node}`);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
const graph: Graph = new Map([
  [0, [1, 2]],
  [1, [0, 2, 3]],
  [2, [0, 1]]
]);
bfs(graph, 0)