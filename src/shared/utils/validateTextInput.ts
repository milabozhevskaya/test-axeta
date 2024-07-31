export const validateNameInput = (name: string) => {
  const regex = /^[a-zA-Z0-9а-яёА-Я\s]*$/;

  return regex.test(name);
};

export const validateLocationInput = (location: string) => {
  const regex = /^[a-zA-Z0-9а-яёА-Я.,-\s]*$/;

  return regex.test(location);
};

export const validateSkillInput = (skill: string) => skill.length >= 3;
