function dijkstra(graph, sourceNode) {
//for my graph I will be using adj list as my representation
//initialize the dist to each vertex to infinity, source to 0

    let dist = {}; //What we want to find, set of Vertex name and distance from source
    let visited = {}; //Keeps track of vertices we visit

    //Variable to keep track on how many vertices we must vist
    //Was boolean, but works better having it with length
    let needToVisit = Object.keys(graph).length;

    for(let vertex in graph) {
        dist[vertex] = Infinity;
        visited[vertex] = false;
    }

    //As per psuedocode, source node starts with 0, since it is already
    //at destination
    dist[sourceNode] = 0;

    //While there are unvisted vertices left in the graph
    while(needToVisit > 0) {
        //select the unvisted vertex v with the lowest distance
        let minDistVert = null;
        let minDist = Infinity;

        //Find smallest distance
        for(let v in graph) {
            if(!visited[v]) {
                if(dist[v] < minDist) {
                    minDist = dist[v];
                    minDistVert = v;
                }
            }
        }

        //found smallest distance? Mark as true, it has been seen
        visited[minDistVert] = true;
        //Must subtract one, while condition
        needToVisit = needToVisit - 1;

        //Looking at the next vertex
        for(let nextVertex in graph[minDistVert]) {
            //if visited keep going to next
            if(visited[nextVertex]) {
                //already visited
                continue;
            }

            //weight is distance
            let weight = graph[minDistVert][nextVertex];
            let updatedDist = dist[minDistVert] + weight;

            //New distnace smaller than current, must update
            if(updatedDist < dist[nextVertex]) {
                dist[nextVertex] = updatedDist;
            }

        }

        // for(let visitedVert in visted) {
        //     if(!visited) {
        //         break;
        //     }
        //     needToVisit = false;
        // }
        
    }

    return dist;

}

//let graph = {
//    A: {B: 1, C: 4},
//    B: {A: 1, C: 2, D: 5},
//    C: {A: 4, B: 2, D: 1},
//    D: {B: 5, C: 1}
//};

//let testResult = dijkstra(graph, 'A');
//console.log(testResult);


//https://www.geeksforgeeks.org/objects-in-javascript/
