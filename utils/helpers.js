const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatFrontmatterDate(date) {
  if (!(date instanceof Date)) date = new Date(date);

  const [month, day, year] = date.toLocaleDateString().split("/");

  return `${monthNames[month]}, ${day} ${year}`;
}
