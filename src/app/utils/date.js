export const getYear = (dateStr) => {
  if (!dateStr) return '';
  return dateStr.slice(0, 4);
};
