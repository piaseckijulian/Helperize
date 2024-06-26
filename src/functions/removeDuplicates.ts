const removeDuplicates = <T>(arr: T[]) => {
  return [...new Set(arr)];
};

export default removeDuplicates;
