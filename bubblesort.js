Array.prototype.swap = function(i,j) {
  let temp = this[i];
  this[i] = this[j];
  this[j] = temp
}

Array.prototype.compare = function(i,j) {
  if (this[i] > this[j]) Array.prototype.swap(i,j)
  else return
}

function bubbleSort(arr) {
  if (!arr.length) return []
  let sortedArr = arr.slice();
  for (let i = 0; i < arr.length-1; i++) {
    sortedArr.compare(i,i+1)
  }
  return sortedArr
}

/*
this[0] == 2; this[1] == 1;
compare(0,1) => if (this[0] > this[1]) swap(0,1)
*/