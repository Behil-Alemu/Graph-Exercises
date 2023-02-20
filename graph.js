class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.addVertex(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		this.nodes.delete(vertex);
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		let toVisitStack = [ start ];
		let visited = new Set(toVisitStack);

		if (toVisitStack.length == 0) return true;
		while (toVisitStack.length) {
			let currNode = toVisitStack.pop();
  let result =[]

			for (let adj of currNode.adjacent) {
				if (!visited.has(adj)) {
					//if it has notbeen already visited then add it to the to visit stack
					toVisitStack.push(adj);
					visited.add(adj);
				}
			}
      console.log('current node',result.push(currNode.value) );

		}
		
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {

    let toVisitQueue = [ start ];
		let visited = new Set(toVisitQueue);

		if (toVisitQueue.length == 0) return true;
		while (toVisitQueue.length) {
			let currNode = toVisitQueue.pop();
  let result =[]

			for (let adj of currNode.adjacent) {
				if (!visited.has(adj)) {
					//if it has notbeen already visited then add it to the to visit stack
					toVisitQueue.push(adj);
					visited.add(adj);
				}
			}
      console.log('current node',result.push(currNode.value) );

		}

  }
}

module.exports = { Graph, Node };
