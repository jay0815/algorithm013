export const bubbleSort = (n: number[]) => {
  const { length } = n;
  for(let i = 0; i < length - 1; i++) {
    for(let j = 0; j < length - i  - 1; j++) {
      if(n[j] > n[j+1]) {
        [n[j], n[j+1]] = [n[j+1], n[j]];
      }
    }
  }
  return n
}