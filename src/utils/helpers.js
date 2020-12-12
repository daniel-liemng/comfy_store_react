export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100);

  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  // Colors: Array of Array -> flat(): 1 Array
  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
