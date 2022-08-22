export const closestMonth = (date: Date): number => {
  const offset = (date.getDate() > 15 ? 1 : -1) + 12;

  // return closest prev or next month index from 0-11
  return (date.getMonth() + offset) % 12;
};
