export function generateColor() {
  let color = "#";
  color += Math.random().toString(16).substring(2, 8);
  return color;
}
