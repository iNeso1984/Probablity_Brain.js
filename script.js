//steps: bring in brain.js, create neural network, and train brain.

//helpful article: https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3

const brain = require("brain.js");

//sets neural pathways to node. The more hiddenlayers the more complex. 
const network = new brain.NeuralNetwork({
    hiddenLayers:[4,5,6]
});

//Example -->baseball team. output shows what index in array wins.
network.train([
  { input: [1, 2], output: [1] }, // Team 2 wins
  { input: [1, 3], output: [1] }, // Team 3 wins
  { input: [2, 3], output: [0] }, // Team 2 wins
  { input: [2, 4], output: [1] }, // Team 4 wins
  { input: [1, 2], output: [1] }, // Team 1 wins
  { input: [1, 3], output: [1] }, // Team 1 wins
  { input: [3, 4], output: [0] }  // Team 3 wins
]);
const output = network.run([4, 1]);
console.log(`Probality
: ${output}`);


//optional rendering to html
const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net);
//run with code runner or node script to show probability.
