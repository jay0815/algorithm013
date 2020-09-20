export const insertionSort = (n: number[]) => {
  let previous, current;

  for (let i = 1; i < n.length; i++) {
    previous = i - 1, current = i;
    while (previous >= 0 && n[current] < n[previous]) {
      [n[previous], n[current]] = [n[current], n[previous] ];
      current--, previous--;
    }
  }

  return n
}