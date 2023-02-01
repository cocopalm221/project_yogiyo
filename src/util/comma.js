export default function convertToComma(price) {
  if (!price) return;
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
