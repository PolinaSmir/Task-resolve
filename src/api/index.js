export const getUsers = (count = 100) => {
  const url = `https://randomuser.me/api/?results=${count}`;
  return fetch(url).then((response) => response.json());
};
