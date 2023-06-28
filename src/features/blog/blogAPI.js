import axios from '../../utils/axios';

export const getBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

export const updateBookmark = async (id, isSaved) => {
  const response = await axios.patch(`/blogs/${id}`, {
    isSaved,
  });
  return response.data;
};
