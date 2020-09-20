const merge = (n, left, middle, right) => {
  const temp = [];
  let i = left, j = middle + 1, k = 0;

  while(i <= middle && j <= right) {
    temp.push(n[i] <= n[j] ? n[i++] : n[j++]);
  }

  while(i <= middle) {
    temp.push(n[i++]);
  }

  while(j <= right) {
    temp.push(n[j++]);
  }

  for(let p = 0; p < temp.length; p++) {
    n[left + p] = temp[p]
  }
}

export const mergeSort = (n, left, right) => {
  if(left >= right) {
    return
  }
  let middle = (left+right) >> 1;

  mergeSort(n, left, middle);
  mergeSort(n, middle + 1, right);

  merge(n, left, middle, right);

  return n
}