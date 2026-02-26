import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54777816-6525979b388f506499e8016c2';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}

export { PER_PAGE };