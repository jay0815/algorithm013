const partition  = (n: number[], start: number, end: number) => {
  let pivot = end, counter = start;
  for(let i = start; i < end; i++) {
    if(n[i] < n[pivot]) {
      [n[i], n[counter]] = [n[counter], n[i]];
      counter++;
    }
  }
  [n[pivot], n[counter]] = [n[counter], n[pivot]];

  return counter;
}

export const quickSort = (n: number[], start: number, end: number) => {
  if(end <= start) {
    return;
  }
  let pivot = partition(n, start, end);
  quickSort(n, start, pivot - 1);
  quickSort(n, pivot + 1, end);
}