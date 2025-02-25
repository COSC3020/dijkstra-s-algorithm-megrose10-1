function dijkstra(graph, sourceNode) {
//for my graph I will be using adj list as my representation
//initialize the dist to each vertex to infinity, source to 0

    let dist = {};
    let visited = {};

    //variable to follow if we still have vertices to visit
    let needToVisit = true;

    for(let vertex in graph) {
        dist[vertex] = Infinity;
        visited[vertex] = false;
    }

    dist[sourceNode] = 0;

    //While there are unmarked vertices left in the graph
    while(needToVisit) {
        //select the unmarked vertex v with the lowest distance
        let minDistVert = null;
        let minDist = Infinity;
        for(v in graph) {
            if(needToVisit) {
                if(dist[v] < minDist) {
                    minDist = dist[v];
                    minDistVert = v;
                }
            }
        }

        visited[minDistVert] = true;

        for(let w in graph[minDistVert]) {

            let weight = graph[minDistVert][w];
            let updatedDist = dist[minDistVert] + weight;

            if(updatedDist < dist[w]) {
                dist[w] = updatedDist;
            }

        }

        for(let visitedVert in visted) {
            if(!visited) {
                break;
            }
            needToVisit = false;
        }
        
    }

    return [];

}


//https://www.geeksforgeeks.org/objects-in-javascript/
