const sortData = (arr) => {
  return [...arr].sort((a, b) => {
    if (a.checked && !b.checked) {
      return -1;
    } else if (!a.checked && b.checked) {
      return 1;
    } else {
      return 0;
    }
  });
};

export { sortData };
