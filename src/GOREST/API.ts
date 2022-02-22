export const getAll = () =>
  fetch('https://gorest.co.in/public/v1/users').then(res => res.json());
