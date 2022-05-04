import axios from 'axios';

export default function fechApi(value, page) {
  const KEY = '26773095-8033af7b4c44df434cdac5aab';
  const per_page = 12;

  return axios
    .get(
      `https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(res => res.data)
    .catch(error => console.log(error));
}
