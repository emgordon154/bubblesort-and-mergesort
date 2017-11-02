Array.prototype.swap = function (i, j) {
  let temp = this[i];
  this[i] = this[j];
  this[j] = temp
}

Array.prototype.compare = function (i, j) {
  if (this[i] > this[j]) {
    this.swap(i, j);
    return false
  } else if (this[i] === this[j]) {
    return true
  } else if (this[i] < this[j]) {
    return true
  }
}

function bubbleSort(arr) {
  if (!arr.length) return []
  else if (arr.length === 1) return arr
  else {
    let sortedArr = arr.slice();
    let notFinished = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (sortedArr.compare(i, i + 1) == false) notFinished = true
    }
    if (notFinished) {
      return bubbleSort(sortedArr.slice(0,-1)).concat(sortedArr[sortedArr.length-1])
    } else {
      return sortedArr
    }
  }
}

/*
this[0] == 2; this[1] == 1;
compare(0,1) => if (this[0] > this[1]) swap(0,1)
*/