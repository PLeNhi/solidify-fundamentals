type Graph = Map<number, number[]>;

function buildAdjacencyList(edges: number[][]): Graph {
  const graph = new Map<number, number[]>();

  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }
  return graph;
}


console.log(buildAdjacencyList([[0, 1], [0, 2], [1, 2]]))