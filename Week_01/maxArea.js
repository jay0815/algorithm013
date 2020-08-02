module.exports = function(heights) {
  let area = 0,
    minHeight = 0;
  for(let i = 0, j = heights.length - 1; i < j;){
    minHeight = heights[i] > heights[j] ? heights[j--] : heights[i++];
    area = Math.max(area, minHeight * (j - i + 1));
  }
  return area;
}