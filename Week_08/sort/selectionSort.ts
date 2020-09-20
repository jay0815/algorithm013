export const selectionSort = (n: number[]) => {
  const { length } = n;
  let index;

  for(let i = 0; i < length; i++) {
    index = i;
    for(let j = i+1; j < length; j++) {
      if(n[j] < n[index]) {
        index = j;
      }
    }
    [ n[i], n[index] ] = [ n[index], n[i] ];
  }

  return n;
}