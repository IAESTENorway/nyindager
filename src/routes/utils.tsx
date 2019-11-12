export const CitiesList = ["oslo", "trondheim", "stavanger"];
export const capitalizeFirstLetter = ([first, ...rest]: string) =>
  [first.toLocaleUpperCase(), ...rest].join("");
