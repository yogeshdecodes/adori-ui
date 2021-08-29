const API = 'https://api.jsonbin.io/b';

export const getAllEpisodes = () => {
  return fetch(`${API}/612b26502aa8003612719f46`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
