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
  let bitCounts = [];
  for (const number in data) {
    if (Object.hasOwnProperty.call(data, number)) {
      const element = data[number];
      const bits = element.split('');
      for (const bitPos in bits) {
        if (Object.hasOwnProperty.call(bits, bitPos)) {
          const bit = bits[bitPos];
          if (!bitCounts[bitPos]) {
            bitCounts[bitPos] = [[],[]];
          }
          bitCounts[bitPos][bit]++;
        }
      }
    }
  }
  for (const key in bitCounts) {
    if (Object.hasOwnProperty.call(bitCounts, key)) {
      const element = bitCounts[key];
      console.log(element);      
    }
  }
  let gamma = '';
  let epsilon = '';
  for (const bitPos in bitCounts) {
    if (Object.hasOwnProperty.call(bitCounts, bitPos)) {
      const element = bitCounts[bitPos];
      if (element[0] > element[1]) {
        gamma += '0';
        epsilon += '1';
      } else {
        epsilon += '0';
        gamma += '1';
      }
    }
  }
  console.log(parseInt(gamma, 2)*parseInt(epsilon, 2));
}

/**
 * calcs part b
 * @param {list} data list of inputs
 */
function partB(data) {
  let bitCounts = [];
  for (const number in data) {
    if (Object.hasOwnProperty.call(data, number)) {
      const element = data[number];
      const bits = element.split('');
      let bitPointer = bitCounts;
      for (const bitPos in bits) {
        if (Object.hasOwnProperty.call(bits, bitPos)) {
          const bit = bits[bitPos];
          if (!bitPointer[0]) {
            bitPointer[0] = [[],[],[],[]];
          }
          bitPointer[0][bit]++;
          bitPointer = bitPointer[0][parseInt(bit)+2];
        }
        // break;
      }
    }
    // break;
  }
  // console.log(bitCounts);
  const oxy = getLarger(bitCounts[0]);
  // console.log(oxy)
  const co2 = getSmaller(bitCounts[0]);
  // console.log(co2);
  console.log(parseInt(oxy, 2)*parseInt(co2, 2));
}

function getLarger(arr) {
  if ((typeof(arr[0]) === 'number' && arr[0] > arr[1]) || typeof(arr[1]) !== 'number') {
    if (arr[2].length > 0) {
      return '0' + getLarger(arr[2][0]);
    } else {
      return '0';
    }
  } else {
    if (arr[3].length > 0) {
      return '1' + getLarger(arr[3][0]);
    } else {
      return '1'
    }
  }
}

function getSmaller(arr) {
  if ((typeof(arr[0]) === 'number' && arr[0] <= arr[1]) || typeof(arr[1]) !== 'number') {
    if (arr[2].length > 0) {
      return '0' + getSmaller(arr[2][0]);
    } else {
      return '0';
    }
  } else {
    if (arr[3].length > 0) {
      return '1' + getSmaller(arr[3][0]);
    } else {
      return '1';
    }
  }
}

partA(data);
partB(data);
