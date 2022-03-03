export const getTodayShortStr = () => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  } as Intl.DateTimeFormatOptions;
  return new Date().toLocaleDateString('EN', options);
};
