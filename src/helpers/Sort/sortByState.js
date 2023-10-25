const sortByState = (arr) => {
  let filterArr = [...arr];
  return filterArr.sort((a, b) =>
    a.completed && !b.completed ? -1 : !a.completed && b.completed ? 1 : 0,
  );
};

export { sortByState };
