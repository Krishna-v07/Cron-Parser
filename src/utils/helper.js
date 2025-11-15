export const expandRange=(start, end, step = 1)=> {
  const listOfRange = [];
  for (let i = start; i <= end; i += step) listOfRange.push(i);
  return listOfRange;
}

