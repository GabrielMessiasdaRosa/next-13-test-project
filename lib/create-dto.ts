"use server";

const createDTO = (array: any[], { ...keys }) => {
  return array.map((item) => {
    const newItem: (typeof array)[0] = {} ?? null;
    for (const key in keys) {
      newItem[key] = item[keys[key]];
    }
    return newItem;
  });
};
export { createDTO };
