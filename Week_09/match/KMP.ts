const computeLPSArray = (pattern: string, M: number, lps: number[]) => {
  // length of the previous longest prefix suffix 
  let len = 0, i = 1;
  lps[0] = 0;

  // the loop calculates lps[i] for i = 1 to M-1 
  while (i < M) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len != 0) {
        len = lps[len - 1];
      } else {
        lps[i] = len;
        i++;
      }
    }
  }
}

export default (text: string, pattern: string) => {

  const { length: N } = text;
  const { length: M } = pattern;

  const lps = [];

  computeLPSArray(pattern, M, lps);

  let i = 0, j = 0;; // index for txt[] 
  while (i < N) {
    if (pattern[j] == text[i]) {
      j++, i++;
    }
    if (j == M) {
      console.log('Found pattern at index', i-j);
      j = lps[j - 1];
      return i-j
    } else if (i < N && pattern[j] != text[i]) {
      if (j != 0) {
        j = lps[j - 1];
      }
      else {
        i += 1;
      }
    }
  }
  return -1;
}
