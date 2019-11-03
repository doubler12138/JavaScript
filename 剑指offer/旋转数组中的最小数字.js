function minNumberInRotateArray2(rotateArray) {
  let left = 0,
    right = rotateArray.length - 1;
  while (right - left > 1) {
    let mid = left + (right - left >> 1);
    if (rotateArray[mid] > rotateArray[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return Math.min(rotateArray[left], rotateArray[right]);
}