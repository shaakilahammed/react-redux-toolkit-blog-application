import axios from '../../utils/axios';

const getBlogs = async (filter, sort) => {
  let filterString = '';
  if (filter === 'saved') {
    filterString += 'isSaved=true';
  }

  if (sort === 'newest') {
    filterString += '&_sort=createdAt&_order=desc';
  }
  if (sort === 'most_liked') {
    filterString += '&_sort=likes&_order=desc';
  }
  const response = await axios.get(`/blogs?${filterString}`);
  return response.data;
};

export default getBlogs;
