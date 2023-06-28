import { useDispatch, useSelector } from 'react-redux';
import BlogItem from './BlogItem';
import { useEffect } from 'react';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Message from '../UI/Message';

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content = null;
  if (isLoading) {
    content = <Message>Loading...</Message>;
  }
  if (!isLoading && isError) {
    content = <Message>{error}</Message>;
  }
  if (!isLoading && !isError && blogs.length <= 0) {
    content = <Message>No blog found...</Message>;
  }
  if (!isLoading && !isError && blogs.length > 0) {
    content = blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default BlogGrid;
