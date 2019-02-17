//prints out the nodes in order
function depthFirstSearch(root, vtx, edges) {
  let stack = [];
  let visited = [];
  let vertex = [];
  stack.push(root);
  visited.push(root);

  while (stack.length > 0) {
    vertex = stack.pop();
    if (!vertex.discovered) {
      vertex.discovered = true;
      findAdjacent(vertex.name, vtx, edges).forEach(node => {
        visited.push(node);
        stack.push(node);
      });
    }
  }
  return visited;
}

//same methods from bfs lab..copy & pasted as helper methdos - finds adjacent node
function findAdjacent(nodeName, vertices, edges) {
  return edges
    .filter(function(edge) {
      return edge.includes(nodeName);
    })
    .map(function(edge) {
      return edge.filter(function(node) {
        return node != nodeName;
      })[0];
    })
    .map(function(name) {
      return findNode(name, vertices);
    })
    .filter(function(node) {
      return !node.discovered;
    });
}

//finds node
function findNode(nodeName, vertices) {
  return vertices.find(function(vertex) {
    return vertex.name == nodeName;
  });
}
