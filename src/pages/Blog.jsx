import { useDispatch, useSelector } from 'react-redux';
import PostDetail from '../components/PostDetail/PostDetail';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import GoHome from '../components/UI/GoHome';
import { useEffect } from 'react';
import { fetchBlog } from '../features/blog/blogSlice';
import { useParams } from 'react-router-dom';
import Message from '../components/UI/Message';

const Blog = () => {
  const dispatch = useDispatch();
  const { blog, isLoading, error, isError } = useSelector(
    (state) => state.blog
  );
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content = null;
  if (isLoading) {
    content = <Message>Loading...</Message>;
  }
  if (!isLoading && isError) {
    content = <Message>{error}</Message>;
  }
  if (!isLoading && !isError && !blog?.id) {
    content = <Message>No blog found...</Message>;
  }
  if (!isLoading && !isError && blog?.id) {
    content = (
      <>
        <PostDetail blog={blog} />
        <RightSidebar />
      </>
    );
  }
  return (
    <>
      <GoHome />
      <section className="post-page-container">{content}</section>
    </>
  );
};

export default Blog;
