export function save(value) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ status: 200, data: value });
    }, 500)
  );
}
