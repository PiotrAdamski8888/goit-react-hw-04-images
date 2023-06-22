import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35135450-91eed02170714cd46fbec0091';
const perPage = 12;

export const fetchPictures = async (keyword, page) => {
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: keyword,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => ({
    id,
    tags,
    webformatURL,
    largeImageURL,
  }));

export { perPage };



