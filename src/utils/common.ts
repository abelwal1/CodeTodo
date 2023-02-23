export const createEnum = (values: any) => {
  const enumObject: any = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
};

export const isNumber = (value: string) => isNaN(parseInt(value));

export const validator = (postcode: string, streetnumber: string): string => {
  if (!postcode || !streetnumber)
    return "Postcode and street number fields mandatory!";
  if (postcode.length < 4) return "Postcode must be at least 4 digits!";
  if (isNumber(postcode)) return "Postcode must be all digits!";
  if (isNumber(streetnumber)) return "Street number must be all digits!";
  return "";
};
