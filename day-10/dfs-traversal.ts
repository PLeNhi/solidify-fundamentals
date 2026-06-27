function dfs(graph: Graph, startNode: number, visited = new Set<number>()): void {
  if (visited.has(startNode)) return;

  console.log(`Duyệt đỉnh: ${startNode}`);
  visited.add(startNode);

  const neighbors = graph.get(startNode) || [];
  for (const neighbor of neighbors) {
    dfs(graph, neighbor, visited);
  }
}
