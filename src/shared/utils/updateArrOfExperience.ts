export const updateArrOfExperience = (
  experience: Array<{ name: string; year: number }>,
  updatedName: string,
  updatedYear: number
) => {
  const newArr = [...experience];

  const indx = experience.findIndex((skill) => skill.name === updatedName);
  if (indx === -1) {
    newArr.push({ name: updatedName, year: updatedYear });
  } else {
    newArr[indx] = { name: updatedName, year: updatedYear };
  }

  newArr.sort((a, b) => b.year - a.year);

  return newArr;
};
