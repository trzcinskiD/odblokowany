export default (date, type) => {
  switch (type) {
    case "long":
      return date.toLocaleDateString("pl-PL", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
      });

    default:
      return date.toLocaleDateString("pl-PL", {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "2-digit",
        year: "2-digit"
      });
  }
};
