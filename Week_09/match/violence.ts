export default (text: string, pattern: string) => {
  let n = text.length;
  let m = pattern.length;
  for (let i = 0; i < n - m + 1; i++) {
    let matched = true;
    for (let j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
}