const sortByState = (arr) => {
  return arr.sort((a, b) =>
    a.checked && !b.checked ? -1 : !a.checked && b.checked ? 1 : 0,
  );
};

export { sortByState };
