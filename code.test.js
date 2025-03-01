//I referenced the graph representations test code and lilybrongo's test code
//For more understanding, I used https://www.geeksforgeeks.org/what-is-the-role-of-assert-in-node-js/
//to understand the assert. 
//TO understand the deepStrictEqual I looked at 
// https://www.w3schools.com/nodejs/met_assert_deepstrictequal.asp .
//Helped find how to automate test https://www.youtube.com/watch?v=uFcXrWT4f80 .
const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

function test() {
    let adjListGraph = {
        A: {B: 4, C: 2},
        B: {A: 4, C: 1},
        C: {A: 2, B: 1}
    };
    let res1 = dijkstra(adjListGraph, 'A');
    assert.deepStrictEqual(res1, {A: 0, B: 3, C: 2});

    let adjListGraph2 = {
        A: {B: 6, C: 1},
        B: {A: 6, C: 5, D: 2},
        C: {A: 1, B: 5, D: 3},
        D: {B: 2, C: 3}
    };
    let res2 = dijkstra(adjListGraph2, 'A');
    assert.deepStrictEqual(res2, {A: 0, B: 6, C: 1, D: 4});

    let adjListGraph3 = {
        A: {B: 2},
        B: {A: 2},
        C: {}
    };
    let res3 = dijkstra(adjListGraph3, 'A');
    assert.deepStrictEqual(res3, {A: 0, B: 2, C: Infinity});

    let adjListGraph4 = {
        A: {B: 5, C: 1},
        B: {A: 5, C: 2, D: 3},
        C: {A: 1, B: 2, D: 1},
        D: {B: 3, C: 1},
    }
    let res4 = dijkstra(adjListGraph4, 'C');
    assert.deepStrictEqual(res4, {A: 1, B: 2, C: 0, D: 1});
    let res5 = dijkstra(adjListGraph4, 'A');
    assert.deepStrictEqual(res5, {A: 0, B: 3, C: 1, D: 2})

}

test();
