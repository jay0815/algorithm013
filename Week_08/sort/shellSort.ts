export const shellSort = (n: number[]) => {
  for (let gap = n.length >> 1; gap > 0; gap = gap >> 1) {
    for (let i = gap; i < n.length; i++) {
      let j = i;
      let current = n[i];
      while (j - gap >= 0 && current < n[j - gap]) {
        n[j] = n[j - gap];
        j = j - gap;
      }
      n[j] = current;
    }
  }
  return n;
}