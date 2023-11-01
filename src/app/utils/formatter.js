export function phoneNumberFormatter(value) {
  if (!value) {
    return value;
  }
  if (value.lenth < 11) {
    return value;
  }

  const ddd = value.substring(0, 2);
  const firstFiveNumers = value.substring(2, 7);
  const lastNumbers = value.substring(7);
  return `(${ddd}) ${firstFiveNumers}-${lastNumbers}`;
}

export function CPFformatter(value) {
  if (!value) {
    return value;
  }
  if (value.lenth < 11) {
    return value;
  }

  const firstNumbers = value.substring(0, 3);
  const secondNumbers = value.substring(3, 6);
  const thirdThreeNumbers = value.substring(6, 9);
  const lastNumbers = value.substring(9);
  return `${firstNumbers}.${secondNumbers}.${thirdThreeNumbers}-${lastNumbers}`;
}

export function cleanCPF(value) {
  if (!value) {
    return value;
  }
  return value.replace(".", "").replace(".", "").replace("-", "");
}

export function cleanPhoneNumber(value) {
  if (!value) {
    return value;
  }
  return value
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "");
}
