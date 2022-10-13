let count = 0;

function binarySearch(arr, target) {
  count++;
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1);

  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(left, target);
  } else {
    let res = binarySearch(right, target);
    return res === -1 ? -1 : res + mid + 1;
  }
}

console.log(binarySearch([0, 1, 3, 7, 12]));
console.log(count);
// target 35
//9
//mid = floor(9/2) = index 4 : value: 12
//left = [0,1,3,7]
//right = [17,21,35,36]
// target more than value: mid
// res = binary search(right, target);
// target = 35, return mid, mid == 2
// res = 2 + 4 + 1 = 7
//

//target 1
//mid = floor(9/2) = index 4 : value: 12
//left = [0,1,3,7]
//right = [17,21,35,36]
// target less than value: mid
// binary search left target

// left = [0,1,3,7]
// mid = 3
// left = [0,1]
//right = [7]

// target less than mid

// mid = 1

// mid === target

// return mid

//
