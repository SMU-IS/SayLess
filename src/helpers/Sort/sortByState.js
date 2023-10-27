const sortByState = (arr) => {
  let filterArr = [...arr];
  return filterArr.sort((a, b) =>
    a.status === 'Completed' && b.status !== 'Completed'
      ? -1
      : a.status !== 'Completed' && b.status === 'Completed'
      ? 1
      : 0,
  );
};

export { sortByState };
