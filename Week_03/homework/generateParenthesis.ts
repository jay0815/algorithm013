// https://leetcode-cn.com/problems/generate-parentheses/
export default {
  recursion: function generateParenthesis(n: number) {
    const result = [];

    const generator = (leftCount: number, rightCount: number, s: string) => {
      // terminator
      if (leftCount === n && rightCount === n) {
        result.push(s);
        return 
      }

      // process current logic: left , right

      if (leftCount < n){
        // drill down
        generator(leftCount + 1, rightCount, s + "(");
      }
      if (leftCount < rightCount) {
        // drill down
        generator(leftCount, rightCount + 1, s + ")");

      }

    }


    generator(0, 0, '')

    return result

  }
}