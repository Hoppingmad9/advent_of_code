const testing = false;

let data;
if (testing) {
  data = require('./test_input.json')['data'];
} else {
  data = require('./input.json')['data'];
}

/**
 * calcs part a
 * @param {list} data list of inputs
 */
function partA(data) {
  let depthIncreasedCount = 0;
  let lastDepth = null;
  for (const x in data) {
    if (Object.hasOwnProperty.call(data, x)) {
      const currentDepth = data[x];
      if (!(lastDepth === null)) {
        if (currentDepth > lastDepth) {
          depthIncreasedCount++;
        }
      }
      lastDepth = currentDepth;
    }
  }
  console.log(depthIncreasedCount);
}

/**
 * calcs part b
 * @param {list} data list of inputs
 */
function partB(data) {
  let depthIncreasedCount = 0;
  const recentDepths = [];
  for (const x in data) {
    if (Object.hasOwnProperty.call(data, x)) {
      const currentDepth = data[x];
      recentDepths.push(currentDepth);
      if (recentDepths.length > 3) {
        const winA = recentDepths[0] + recentDepths[1] + recentDepths[2];
        const winB = recentDepths[1] + recentDepths[2] + recentDepths[3];
        // console.log(`winA: ${winA}, winB: ${winB}`);
        if (winB > winA) {
          depthIncreasedCount++;
        }
        recentDepths.shift();
      }
    }
  }
  console.log(depthIncreasedCount);
}

partA(data);
partB(data);
