export default function getAverage(arr) {
  if (arr.length === 0) return 0;
  const average = arr.reduce((sum, value) => sum + value, 0) / arr.length;

  return average;
}
