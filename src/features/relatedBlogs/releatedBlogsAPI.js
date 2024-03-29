import axios from '../../utils/axios';

const getRelatedBlogs = async (currentBlogId, tags) => {
  const limit = 3;
  let queryString = '';

  queryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join('&') +
        `&id_ne=${currentBlogId}&_limit=${limit}`
      : `id_ne=${currentBlogId}&_limit=${limit}`;
  const response = await axios.get(`/blogs?${queryString}`);
  return response.data;
};

export default getRelatedBlogs;
