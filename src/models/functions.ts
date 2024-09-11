/* Type Casting */

export const filterPropertiesOfObjsInArray = <T, K extends keyof T>(
  objsArray: T[],
  ...keys: K[]
): Pick<T, K>[] => {
  const filteredObjsArray = objsArray.reduce((acc: Pick<T, K>[], item) => {
    const newObj = {} as Pick<T, K>;
    keys.forEach((key) => (newObj[key] = item[key]));
    acc.push(newObj);
    return acc;
  }, [] as Pick<T, K>[]);

  return filteredObjsArray;
};