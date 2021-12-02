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
  let horiz = 0;
  let vert = 0;
  for (const instruction in data) {
    if (Object.hasOwnProperty.call(data, instruction)) {
      const element = data[instruction];
      const direction = element[0];
      const distance = element[1];
      switch (direction) {
        case 'forward':
          horiz += distance;
          break;
        case 'up':
          vert -= distance;
          break;
        case 'down':
          vert += distance;
          break;
        default:
          break;
      }
    }
  }
  console.log(horiz * vert);
}

/**
 * calcs part b
 * @param {list} data list of inputs
 */
function partB(data) {
  let horiz = 0;
  let vert = 0;
  let aim = 0;
  for (const instruction in data) {
    if (Object.hasOwnProperty.call(data, instruction)) {
      const element = data[instruction];
      const direction = element[0];
      const distance = element[1];
      switch (direction) {
        case 'forward':
          horiz += distance;
          vert += distance * aim;
          break;
        case 'up':
          aim -= distance;
          break;
        case 'down':
          aim += distance;
          break;
        default:
          break;
      }
    }
  }
  console.log(horiz * vert);
}

partA(data);
partB(data);
