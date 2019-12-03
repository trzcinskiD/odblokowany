export default date => {
  return date.toLocaleDateString("pl-PL", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "2-digit",
    year: "2-digit"
  });
};
