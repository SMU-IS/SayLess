const sortByState = (arr) => {
  let filterArr = [...arr];
  return filterArr.sort((a, b) =>
    a.checked && !b.checked ? -1 : !a.checked && b.checked ? 1 : 0,
  );
};

export { sortByState };
