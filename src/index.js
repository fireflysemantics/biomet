export function add(...nums) {
  return nums.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
