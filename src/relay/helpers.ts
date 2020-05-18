export type Edge<T> = { node: T; cursor: string };
export type CursorForNode<T> = (node: T) => string;
export type RelayPaginationResult<T = unknown> = {
  edges: { node: T }[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
};

export const nodeWrapper = <T>(node: T, cursor: string): { cursor: string; node: T } => ({
  cursor,
  node,
});

export function applyCursorsToEdges<T = unknown>(
  allEdges: Edge<T>[],
  cursorForNode: CursorForNode<T>,
  before?: string,
  after?: string,
): { edges: Edge<T>[]; frontCut: boolean; backCut: boolean } {
  let edges = [...allEdges];
  let frontCut = false;
  let backCut = false;

  if (after) {
    const afterEdge = allEdges.find((edge: Edge<T>) => cursorForNode(edge.node) === after);
    if (!afterEdge) throw new Error(`${after} doesn't appear to be a valid edge`);

    const afterEdgeIndex = allEdges.indexOf(afterEdge);
    const sliced = edges.slice(afterEdgeIndex + 1, edges.length);
    frontCut = sliced.length !== edges.length;
    edges = sliced;
  }

  if (before) {
    const beforeEdge = allEdges.find((edge: Edge<T>) => cursorForNode(edge.node) === before);
    if (!beforeEdge) throw new Error(`${before} doesn't appear to be a valid edge`);

    const beforeEdgeIndex = allEdges.indexOf(beforeEdge);
    const sliced = edges.slice(0, beforeEdgeIndex);
    backCut = sliced.length !== edges.length;
    edges = sliced;
  }

  return { edges: edges, frontCut, backCut };
}

export function relayPaginateNodes<T = unknown>(
  nodes: T[],
  args: { [key: string]: unknown; first?: number; last?: number; before?: string; after?: string },
  cursorForNode: CursorForNode<T>,
): RelayPaginationResult {
  const { first, last, before, after } = args;
  const allEdges = nodes.map((node) => nodeWrapper(node, cursorForNode(node)));
  // eslint-disable-next-line prefer-const
  let { edges, frontCut, backCut } = applyCursorsToEdges<T>(allEdges, cursorForNode, before, after);

  let hasNextPage = backCut;
  let hasPreviousPage = frontCut;

  if (first) {
    if (first < 0) throw new Error('`first` argument must be greater than or equal to 0');

    if (edges.length > first) {
      edges = edges.slice(0, first);
      hasNextPage = true;
    }
  }

  if (last) {
    if (last < 0) throw new Error('`last` argument must be greater than or equal to 0');

    if (edges.length > last) {
      edges = edges.slice(edges.length - last, edges.length);
      hasPreviousPage = true;
    }
  }

  const startNode = edges[0]?.node;
  const endNode = edges[edges.length - 1]?.node;

  return {
    edges: edges,
    pageInfo: {
      hasNextPage,
      hasPreviousPage,
      startCursor: startNode ? cursorForNode(startNode) : null,
      endCursor: endNode ? cursorForNode(endNode) : null,
    },
  };
}