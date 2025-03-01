# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

I have used the lecture slides and videos from graphing, I also https://www.geeksforgeeks.org/objects-in-javascript/ to read more on objects. I referenced the graph representations test code and lilybrongo's test code. For more understanding, I used https://www.geeksforgeeks.org/what-is-the-role-of-assert-in-node-js/ to understand the assert. TO understand the deepStrictEqual I looked at https://www.w3schools.com/nodejs/met_assert_deepstrictequal.asp . Helped find how to automate test https://www.youtube.com/watch?v=uFcXrWT4f80 . I am also unsure if I should list the psuedocode, but I also used this. I also was reviewing on how to look into a graph/vertex in the beginning by looking at https://www.geeksforgeeks.org/print-adjacency-list-for-a-directed-graph/.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

At the start, we go through each vertex to initialize dist and visted, marking all distances as Infinity and all vertices as false, unvisited, which this takes O(V). We also set the source node’s distance to zero after. Next, we enter the while loop, which keeps going until all vertices are true, visited, which this would cause it to run O(V). Inside this while loop, there is a for loop that checks all the vertices to find the one with the smallest distance, again this checks each vertex so would be O(V), making both the nested for loop and while loop O(V^2). After this, we look at each edge connected to the vertex we are looking at currently to update the distance, which looking at each edge is O(E). In conclusion, the time complexity is $\Theta$(V^2 + E). The first O(V) was taken off since this is a constant factor, and shouldn't affect the big $\Theta$ complexity.


